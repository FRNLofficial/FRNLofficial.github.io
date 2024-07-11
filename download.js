function downloadFile() {
    const link = document.createElement('a');
    link.href = 'https://FRNLofficial.github.io/FRNLofficial/downloads/placeholder.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}