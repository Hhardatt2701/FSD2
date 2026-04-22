# Microservice-Based Backend Module

> **Experiment:** Develop microservice-based backend module  
> **Submission Date:** 26th March 2026

---

## Overview

Two independent Python (Flask) microservices that communicate through REST APIs and store data in-memory (no database required).

| Service | Port | Responsibility |
|---|---|---|
| **Customer Service** | `5001` | Fetch customer details & their orders |
| **Order Service** | `5002` | View orders & update order status |

---

## Project Structure

```
microservices/
├── customer_service/
│   ├── app.py              # Flask application
│   ├── requirements.txt    # Dependencies
│   └── render.yaml         # Render deploy config
├── order_service/
│   ├── app.py              # Flask application
│   ├── requirements.txt    # Dependencies
│   └── render.yaml         # Render deploy config
└── README.md
```

---

## Setup & Run Locally

### Prerequisites
- Python 3.9+
- pip

### 1. Clone / extract the project

```bash
unzip microservices.zip
cd microservices
```

### 2. Run Customer Service (Terminal 1)

```bash
cd customer_service
pip install -r requirements.txt
python app.py
# Listening on http://localhost:5001
```

### 3. Run Order Service (Terminal 2)

```bash
cd order_service
pip install -r requirements.txt
python app.py
# Listening on http://localhost:5002
```

---

## API Reference

### Customer Service — `http://localhost:5001`

#### `GET /`
Health check.

```json
{ "service": "Customer Service", "status": "running" }
```

---

#### `GET /customers`
Returns all customers.

**Response:**
```json
{
  "customers": [
    { "name": "Alice Johnson", "email": "alice@example.com" },
    ...
  ]
}
```

---

#### `GET /customers/{customer_id}`
Returns a single customer.

**Example:** `GET /customers/C001`

```json
{
  "customer_id": "C001",
  "name": "Alice Johnson",
  "email": "alice@example.com"
}
```

---

#### `GET /customers/{customer_id}/orders`  ⭐ Core Endpoint
Fetch all orders belonging to a customer.

**Example:** `GET /customers/C001/orders`

```json
{
  "customer_id": "C001",
  "customer_name": "Alice Johnson",
  "total_orders": 2,
  "orders": [
    { "order_id": "ORD001", "customer_id": "C001", "product": "Laptop", "quantity": 1, "status": "shipped" },
    { "order_id": "ORD002", "customer_id": "C001", "product": "Mouse",  "quantity": 2, "status": "pending" }
  ]
}
```

**Error (404):**
```json
{ "error": "Customer 'C999' not found." }
```

---

### Order Service — `http://localhost:5002`

#### `GET /`
Health check.

```json
{ "service": "Order Service", "status": "running" }
```

---

#### `GET /orders`
Returns all orders.

---

#### `GET /orders/{order_id}`
Returns a single order.

**Example:** `GET /orders/ORD001`

```json
{
  "order_id": "ORD001",
  "customer_id": "C001",
  "product": "Laptop",
  "quantity": 1,
  "status": "shipped"
}
```

---

#### `PUT /orders/{order_id}/status`  ⭐ Core Endpoint
Update the status of an order.

**Request Body (JSON):**
```json
{ "status": "delivered" }
```

**Valid statuses:** `pending` | `processing` | `shipped` | `delivered` | `cancelled`

**Example:** `PUT /orders/ORD002/status`

```json
{
  "message": "Order status updated successfully.",
  "order_id": "ORD002",
  "old_status": "pending",
  "new_status": "delivered"
}
```

**Error (400 — invalid status):**
```json
{ "error": "Invalid status 'unknown'. Must be one of: cancelled, delivered, pending, processing, shipped." }
```

---

## Sample Data

### Customers

| ID | Name | Email |
|---|---|---|
| C001 | Alice Johnson | alice@example.com |
| C002 | Bob Smith | bob@example.com |
| C003 | Carol White | carol@example.com |

### Orders

| Order ID | Customer | Product | Qty | Status |
|---|---|---|---|---|
| ORD001 | C001 | Laptop | 1 | shipped |
| ORD002 | C001 | Mouse | 2 | pending |
| ORD003 | C002 | Keyboard | 1 | delivered |
| ORD004 | C003 | Monitor | 1 | pending |
| ORD005 | C002 | Headphones | 3 | shipped |

---

## Testing with Postman

### Import Collection (manual steps)

1. Open Postman → **New Collection** → name it `Microservices Lab`

### Customer Service Requests

| # | Method | URL | Expected |
|---|---|---|---|
| 1 | GET | `http://localhost:5001/` | Health check |
| 2 | GET | `http://localhost:5001/customers` | All customers |
| 3 | GET | `http://localhost:5001/customers/C001` | Alice's profile |
| 4 | GET | `http://localhost:5001/customers/C001/orders` | Alice's 2 orders |
| 5 | GET | `http://localhost:5001/customers/C999/orders` | 404 error |

### Order Service Requests

| # | Method | URL | Body | Expected |
|---|---|---|---|---|
| 6 | GET | `http://localhost:5002/orders` | — | All 5 orders |
| 7 | GET | `http://localhost:5002/orders/ORD002` | — | Mouse order |
| 8 | PUT | `http://localhost:5002/orders/ORD002/status` | `{"status":"processing"}` | Status updated |
| 9 | PUT | `http://localhost:5002/orders/ORD002/status` | `{"status":"delivered"}` | Status updated |
| 10 | PUT | `http://localhost:5002/orders/ORD002/status` | `{"status":"xyz"}` | 400 error |

> **Postman tip:** For PUT requests → Body tab → **raw** → **JSON** → paste the body above.

---

## Deploying on Render

### Steps for Each Service

1. Push each service folder to its **own GitHub repository** (e.g. `customer-service-repo`, `order-service-repo`)

2. Go to [https://render.com](https://render.com) → **New Web Service**

3. Connect your GitHub repo

4. Fill in settings:

| Field | Customer Service | Order Service |
|---|---|---|
| **Name** | `customer-service` | `order-service` |
| **Runtime** | Python 3 | Python 3 |
| **Build Command** | `pip install -r requirements.txt` | `pip install -r requirements.txt` |
| **Start Command** | `gunicorn app:app --bind 0.0.0.0:$PORT` | `gunicorn app:app --bind 0.0.0.0:$PORT` |

5. Click **Create Web Service** — Render will build and deploy automatically.

6. Your live URLs will look like:
   - `https://customer-service-xxxx.onrender.com`
   - `https://order-service-xxxx.onrender.com`

> **Note:** Free-tier Render services spin down after 15 min of inactivity — first request after idle may take ~30 seconds.

---

## Technologies Used

- **Python 3.11**
- **Flask 3.1** — web framework
- **Gunicorn** — WSGI server for production (Render)
- **Postman** — API testing
- **Render** — cloud deployment platform

---

## Author

Submitted as part of the Microservices Backend Lab assignment.
