FROM python:3.10-bullseye

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies with retry
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir --retries 5 --timeout 60 -r requirements.txt

# Copy application code
COPY . .

# Set environment variables
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV PYTHONPATH=/app

# Configure Flask to serve static files
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5000

# Expose port
EXPOSE 5000

# Run the application with explicit python command
CMD ["python", "-m", "flask", "run"]
