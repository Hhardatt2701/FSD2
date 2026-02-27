## Aim-
To design and implement a modular RESTful API using the Flask framework that performs full CRUD (Create, Read, Update, Delete) operations.

## Tools & frameworks-
Language     -   Python
Framework    -   Flask
API Testing  -   Postman
Deployment   -   Render

## Features-
Create a student (POST)

Get all students (GET)

Get single student by ID (GET)

Update student details (PUT)

Delete a student (DELETE)

Blueprint-based modular structure

JSON request & response handling

## Core Concepts-

1. Flask Framework

A lightweight Python web framework used to build web applications and APIs.

2. REST Architecture

REST (Representational State Transfer) is an architectural style that uses HTTP methods:

GET → Retrieve data

POST → Create data

PUT → Update data

DELETE → Remove data

3. Blueprint in Flask

A Blueprint is used to organize related routes into separate modules.
In this project, all student-related routes are grouped inside student_bp.

4. JSON Handling

request.get_json() → Reads JSON data from client

jsonify() → Converts Python dictionary to JSON response

5. HTTP Status Codes

200 → Success

201 → Created

400 → Bad Request

404 → Not Found

6. In-Memory Storage

Student data is stored in a Python list instead of a database.
(Data resets when server restarts.)

## Learning Outcomes-

1. Learned how to extract and process data from URL parameters (e.g., <int:student_id>) and JSON request bodies in Flask.

2. Understood how to manage application state using global variables and implement unique identifiers (current_id) within the application.

3. Implemented proper error handling by returning appropriate HTTP status codes such as 201 (Created), 400 (Bad Request), and 404 (Not Found).

4. Developed input validation logic to ensure required fields (like "name") are present before performing CRUD operations.

5. Gained practical experience in designing and implementing RESTful API endpoints using different HTTP methods (GET, POST, PUT, DELETE) in Flask.
