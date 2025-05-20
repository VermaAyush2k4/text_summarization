# Smart Text Summarizer

A web-based text summarization application that uses AI to generate concise summaries from long text documents. The application supports both text input and uses the BART model from Hugging Face for summarization.

## Features

- Text summarization with adjustable length (1-10 sentences)
- Real-time word count display
- Copy and download summary options
- Editable summary output
- Modern and responsive UI
- Docker support for easy deployment

## System Requirements

- Python 3.10 or higher
- Docker Desktop (for containerized deployment)

## Installation

### Option 1: Using Docker (Recommended)

1. Install Docker Desktop from [here](https://www.docker.com/products/docker-desktop)
2. Clone the repository:
```bash
git clone <repository-url>
cd text_summarisation
```
3. Build and run the application:
```bash
docker-compose build
docker-compose up
```

### Option 2: Local Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd text_summarisation
```
2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```
3. Install dependencies:
```bash
pip install -r requirements.txt
```
4. Run the application:
```bash
python app.py
```

## Project Structure

```
text_summarisation/
├── app.py              # Main Flask application
├── static/             # Static files (CSS, JS)
│   ├── style.css
│   └── script.js
├── templates/          # HTML templates
│   └── index.html
├── uploads/           # Directory for uploaded files
├── Dockerfile         # Docker configuration
├── docker-compose.yml # Docker Compose configuration
└── requirements.txt   # Python dependencies
```

## Using the Application

1. Paste text directly into the text area. 
2. Adjust the summary length using the slider (1-10 sentences)
3. Click "Generate Summary" to create a summary
4. Edit the summary if needed
5. Copy or download the summary using the provided buttons

## Docker Commands

- Build the Docker image:
```bash
docker-compose build
```

- Start the application:
```bash
docker-compose up
```

- Stop the application:
```bash
docker-compose down
```

- View logs:
```bash
docker-compose logs -f
```

## Dependencies

- Flask 3.0.0
- Transformers 4.36.2
- PyTorch 2.0.0+
- NLTK 3.8.1
- Flask-Limiter 3.5.0
- NumPy 1.26.2

## Usage

1. Open the application in your web browser
2. Paste your text into the input area
3. Adjust the summary length using the slider (1-10 sentences)
4. Click "Summarize" to generate the summary
5. Use the "Copy" or "Download" buttons to save your summary


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Hugging Face Transformers library
- Flask framework
- Various open-source libraries and contributors
