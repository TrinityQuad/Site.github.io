
    fetch('feedbacks.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('feedback').innerHTML = data;
        });
        
    