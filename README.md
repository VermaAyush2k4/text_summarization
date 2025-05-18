# Smart Text Summarizer

A web-based text summarization application that uses AI to generate concise summaries from long text documents.

## Features

- Paste any text and get an AI-generated summary
- Adjustable summary length (1-10 sentences)
- Real-time word count display
- Copy and download summary options
- Editable summary output
- Modern and user-friendly interface

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd text_summarisation
```

2. Create a virtual environment (recommended):
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

## Project Structure

```
text_summarisation/
├── app.py              # Main Flask application
├── requirements.txt    # Project dependencies
├── static/
│   ├── script.js      # Frontend JavaScript
│   └── style.css      # Frontend styling
└── templates/
    └── index.html     # Main HTML template
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Hugging Face Transformers library
- Flask framework
- Various open-source libraries and contributors
