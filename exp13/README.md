# Student CRUD API – Flask + MySQL

This is a simple backend project using Flask and MySQL to perform CRUD operations on student data.

## Features

- Add student
- View students
- Update student
- Delete student

## Technologies

- Python (Flask)
- MySQL
- Postman

## Setup

### 1. Install dependencies

```bash
pip install flask flask-mysqldb
```

### 2. Create database

Open MySQL and run:

```sql
CREATE DATABASE college;
USE college;

CREATE TABLE student (
    id    INT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(100),
    email VARCHAR(100),
    age   INT
);
```

### 3. Update credentials

In `app.py`, update your MySQL password:

```python
app.config['MYSQL_PASSWORD'] = 'your_password'
```

### 4. Run the app

```bash
python app.py
```

Server runs at: `http://127.0.0.1:5000`

---

## API Endpoints

| Method | Endpoint           | Description       |
|--------|--------------------|-------------------|
| POST   | /students          | Add student       |
| GET    | /students          | Get all students  |
| PUT    | /students/\<id\>   | Update student    |
| DELETE | /students/\<id\>   | Delete student    |

---

## Request Body (JSON)

```json
{
  "name": "Harsh",
  "email": "harsh@example.com",
  "age": 20
}
```

---

## Validations

- `name` – Required
- `email` – Required
- `age` – Required, must be a number between 1 and 100

### Validation Error Response (422)

```json
{
  "errors": ["Age must be between 1 and 100."]
}
```

---

## Testing

Use Postman to test the APIs.

### POST /students
- Method: `POST`
- URL: `http://127.0.0.1:5000/students`
- Body → raw → JSON

### GET /students
- Method: `GET`
- URL: `http://127.0.0.1:5000/students`

### PUT /students/1
- Method: `PUT`
- URL: `http://127.0.0.1:5000/students/1`
- Body → raw → JSON

### DELETE /students/1
- Method: `DELETE`
- URL: `http://127.0.0.1:5000/students/1`
