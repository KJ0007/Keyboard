document.addEventListener('DOMContentLoaded', function() {
    const keys = document.querySelectorAll('.key');
    const input = document.getElementById('input');

    keys.forEach(key => {
        key.addEventListener('click', function() {
            const value = this.textContent.trim(); // Get text content of the clicked button
            input.value += value; // Add the text content to the input field value
        });
    });
});
