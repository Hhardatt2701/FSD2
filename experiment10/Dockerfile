FROM python:3.10

WORKDIR /app

# Copy only requirements first (better caching)
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Now copy rest of code
COPY . .

CMD ["python", "run.py"]