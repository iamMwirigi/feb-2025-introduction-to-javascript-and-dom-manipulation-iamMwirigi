// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', () => {
    document.getElementById('text').textContent = 'The text has been changed!';
});

// Add a new element dynamically
document.getElementById('addElementButton').addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added dynamically.';
    document.getElementById('container').appendChild(newElement);
});