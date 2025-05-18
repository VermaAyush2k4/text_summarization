document.addEventListener('DOMContentLoaded', function() {
    // Word count update
    const inputText = document.getElementById('inputText');
    const wordCount = document.getElementById('wordCount');
    
    function updateWordCount() {
        const words = inputText.value.trim().split(/\s+/).filter(Boolean);
        wordCount.textContent = words.length;
    }
    
    inputText.addEventListener('input', updateWordCount);
    updateWordCount();

    // Slider value update
    const slider = document.getElementById('summaryLength');
    const sliderValue = document.querySelector('.slider-value');
    
    slider.addEventListener('input', function() {
        sliderValue.textContent = this.value;
    });
});

// Copy summary to clipboard
function copySummary() {
    const summaryBox = document.getElementById('summaryResult');
    const range = document.createRange();
    range.selectNode(summaryBox);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    try {
        document.execCommand('copy');
        showNotification('Copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Failed to copy', 'error');
    }
    
    window.getSelection().removeAllRanges();
}

// Download summary as text file
function downloadSummary() {
    const summaryBox = document.getElementById('summaryResult');
    const summaryText = summaryBox.textContent.trim();
    
    if (!summaryText) {
        showNotification('No summary to download', 'error');
        return;
    }
    
    const blob = new Blob([summaryText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'summary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Summary downloaded!', 'success');
}

// Show notifications
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Summary functions
async function summarizeText() {
    const inputText = document.getElementById('inputText');
    const resultDiv = document.getElementById('summaryResult');
    const editMode = document.getElementById('editMode').checked;
    const summaryLength = parseInt(document.getElementById('summaryLength').value);
    const summaryWordCount = document.getElementById('summaryWordCount');
    const processingTime = document.getElementById('processingTime');
    
    if (!inputText.value.trim()) {
        resultDiv.innerHTML = '<div class="error-message">Please enter some text first.</div>';
        return;
    }

    // Show loading state
    resultDiv.innerHTML = '<div class="loading-message">Summarizing... Please wait.</div>';
    
    try {
        const startTime = performance.now();
        
        const response = await fetch("/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                text: inputText.value,
                slider_position: summaryLength
            })
        });

        const data = await response.json();
        const endTime = performance.now();
        const duration = Math.round((endTime - startTime) / 1000);

        // Update summary and stats
        resultDiv.innerHTML = `<p>${data.summary}</p>`;
        const summaryWords = data.summary.split(/\s+/).filter(Boolean).length;
        summaryWordCount.textContent = summaryWords;
        processingTime.textContent = duration;
        
        resultDiv.contentEditable = editMode ? 'true' : 'false';
        
        // Add success animation
        resultDiv.classList.add('success-animation');
        setTimeout(() => {
            resultDiv.classList.remove('success-animation');
        }, 500);

    } catch (error) {
        resultDiv.innerHTML = '<div class="error-message">An error occurred. Please try again.</div>';
        console.error("Summary Error:", error);
    }
}

// Copy summary to clipboard
function copySummary() {
    const summaryBox = document.getElementById('summaryResult');
    const range = document.createRange();
    range.selectNode(summaryBox);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    try {
        document.execCommand('copy');
        showNotification('Copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Failed to copy', 'error');
    }
    
    window.getSelection().removeAllRanges();
}

// Download summary as text file
function downloadSummary() {
    const summaryBox = document.getElementById('summaryResult');
    const summaryText = summaryBox.textContent.trim();
    
    if (!summaryText) {
        showNotification('No summary to download', 'error');
        return;
    }
    
    const blob = new Blob([summaryText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'summary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Summary downloaded!', 'success');
}

// Show notifications
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}