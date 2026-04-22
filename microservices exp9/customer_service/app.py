from flask import Flask, jsonify, abort

app = Flask(__name__)

# ── In-memory data ──────────────────────────────────────────────────────────
customers = {
    "C001": {"name": "Alice Johnson", "email": "alice@example.com"},
    "C002": {"name": "Bob Smith",     "email": "bob@example.com"},
    "C003": {"name": "Carol White",   "email": "carol@example.com"},
}

orders = [
    {"order_id": "ORD001", "customer_id": "C001", "product": "Laptop",     "quantity": 1, "status": "shipped"},
    {"order_id": "ORD002", "customer_id": "C001", "product": "Mouse",      "quantity": 2, "status": "pending"},
    {"order_id": "ORD003", "customer_id": "C002", "product": "Keyboard",   "quantity": 1, "status": "delivered"},
    {"order_id": "ORD004", "customer_id": "C003", "product": "Monitor",    "quantity": 1, "status": "pending"},
    {"order_id": "ORD005", "customer_id": "C002", "product": "Headphones", "quantity": 3, "status": "shipped"},
]
# ────────────────────────────────────────────────────────────────────────────


@app.route("/", methods=["GET"])
def health():
    return jsonify({"service": "Customer Service", "status": "running"})


@app.route("/customers", methods=["GET"])
def get_all_customers():
    """Return all customers."""
    return jsonify({"customers": list(customers.values())})


@app.route("/customers/<customer_id>", methods=["GET"])
def get_customer(customer_id):
    """Return a single customer by ID."""
    customer = customers.get(customer_id)
    if not customer:
        abort(404, description=f"Customer '{customer_id}' not found.")
    return jsonify({"customer_id": customer_id, **customer})


@app.route("/customers/<customer_id>/orders", methods=["GET"])
def get_customer_orders(customer_id):
    """Fetch all orders for a given customer."""
    if customer_id not in customers:
        abort(404, description=f"Customer '{customer_id}' not found.")

    customer_orders = [o for o in orders if o["customer_id"] == customer_id]
    return jsonify({
        "customer_id":   customer_id,
        "customer_name": customers[customer_id]["name"],
        "total_orders":  len(customer_orders),
        "orders":        customer_orders,
    })


@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": str(e)}), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
