from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL Configuration - update password to yours
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'your_password'
app.config['MYSQL_DB'] = 'college'

mysql = MySQL(app)


# ─── Validation Helper ────────────────────────────────────────────
def validate_student(data):
    errors = []
    if not data.get('name') or not str(data['name']).strip():
        errors.append("Name is required.")
    if not data.get('email') or not str(data['email']).strip():
        errors.append("Email is required.")
    if data.get('age') is None or data.get('age') == '':
        errors.append("Age is required.")
    else:
        try:
            age = int(data['age'])
            if age < 1 or age > 100:
                errors.append("Age must be between 1 and 100.")
        except (ValueError, TypeError):
            errors.append("Age must be a valid number.")
    return errors


# ─── ADD STUDENT (POST) ───────────────────────────────────────────
@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    errors = validate_student(data)
    if errors:
        return jsonify({"errors": errors}), 422

    name  = data['name'].strip()
    email = data['email'].strip()
    age   = int(data['age'])

    cur = mysql.connection.cursor()
    try:
        cur.execute(
            "INSERT INTO student (name, email, age) VALUES (%s, %s, %s)",
            (name, email, age)
        )
        mysql.connection.commit()
        return jsonify({"message": "Student added successfully", "id": cur.lastrowid}), 201
    except Exception as e:
        mysql.connection.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        cur.close()


# ─── GET ALL STUDENTS (GET) ───────────────────────────────────────
@app.route('/students', methods=['GET'])
def get_students():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM student")
    rows = cur.fetchall()
    cur.close()

    students = [
        {"id": r[0], "name": r[1], "email": r[2], "age": r[3]}
        for r in rows
    ]
    return jsonify(students), 200


# ─── UPDATE STUDENT (PUT) ─────────────────────────────────────────
@app.route('/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    errors = validate_student(data)
    if errors:
        return jsonify({"errors": errors}), 422

    name  = data['name'].strip()
    email = data['email'].strip()
    age   = int(data['age'])

    cur = mysql.connection.cursor()
    try:
        cur.execute("SELECT id FROM student WHERE id = %s", (student_id,))
        if not cur.fetchone():
            return jsonify({"error": "Student not found"}), 404

        cur.execute(
            "UPDATE student SET name=%s, email=%s, age=%s WHERE id=%s",
            (name, email, age, student_id)
        )
        mysql.connection.commit()
        return jsonify({"message": "Student updated successfully"}), 200
    except Exception as e:
        mysql.connection.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        cur.close()


# ─── DELETE STUDENT (DELETE) ──────────────────────────────────────
@app.route('/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    cur = mysql.connection.cursor()
    try:
        cur.execute("SELECT id FROM student WHERE id = %s", (student_id,))
        if not cur.fetchone():
            return jsonify({"error": "Student not found"}), 404

        cur.execute("DELETE FROM student WHERE id = %s", (student_id,))
        mysql.connection.commit()
        return jsonify({"message": "Student deleted successfully"}), 200
    except Exception as e:
        mysql.connection.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        cur.close()


if __name__ == '__main__':
    app.run(debug=True)
