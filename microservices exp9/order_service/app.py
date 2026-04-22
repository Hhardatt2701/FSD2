from flask import Flask, jsonify, request, abort

app = Flask(__name__)

# ── In-memory data ──────────────────────────────────────────────────────────
VALID_STATUSES = {"pending", "processing", "shipped", "delivered", "cancelled"}

orders = {
    "ORD001": {"customer_id": "C001", "product": "Laptop",     "quantity": 1, "status": "shipped"},
    "ORD002": {"customer_id": "C001", "product": "Mouse",      "quantity": 2, "status": "pending"},
    "ORD003": {"customer_id": "C002", "product": "Keyboard",   "quantity": 1, "status": "delivered"},
    "ORD004": {"customer_id": "C003", "product": "Monitor",    "quantity": 1, "status": "pending"},
    "ORD005": {"customer_id": "C002", "product": "Headphones", "quantity": 3, "status": "shipped"},
}
# ────────────────────────────────────────────────────────────────────────────


@app.route("/", methods=["GET"])
def health():
    return jsonify({"service": "Order Service", "status": "running"})


@app.route("/orders", methods=["GET"])
def get_all_orders():
    """Return all orders."""
    result = [{"order_id": oid, **data} for oid, data in orders.items()]
    return jsonify({"total_orders": len(result), "orders": result})


@app.route("/orders/<order_id>", methods=["GET"])
def get_order(order_id):
    """Return a single order by ID."""
    order = orders.get(order_id)
    if not order:
        abort(404, description=f"Order '{order_id}' not found.")
    return jsonify({"order_id": order_id, **order})


@app.route("/orders/<order_id>/status", methods=["PUT"])
def update_order_status(order_id):
    """Update the status of an existing order.

    Request body (JSON):
        { "status": "<new_status>" }

    Valid statuses: pending | processing | shipped | delivered | cancelled
    """
    order = orders.get(order_id)
    if not order:
        abort(404, description=f"Order '{order_id}' not found.")

    body = request.get_json(silent=True)
    if not body or "status" not in body:
        abort(400, description="Request body must contain a 'status' field.")

    new_status = body["status"].strip().lower()
    if new_status not in VALID_STATUSES:
        abort(400, description=(
            f"Invalid status '{new_status}'. "
            f"Must be one of: {', '.join(sorted(VALID_STATUSES))}."
        ))

    old_status = order["status"]
    orders[order_id]["status"] = new_status

    return jsonify({
        "message":    "Order status updated successfully.",
        "order_id":   order_id,
        "old_status": old_status,
        "new_status": new_status,
    })


@app.errorhandler(400)
def bad_request(e):
    return jsonify({"error": str(e)}), 400


@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": str(e)}), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002, debug=True)
