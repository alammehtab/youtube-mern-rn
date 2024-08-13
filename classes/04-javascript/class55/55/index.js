var text = document.getElementById('text');

// Set initial styles explicitly
text.style.color = 'black';
text.style.fontSize = '20px';
text.style.border = '1px solid black';

function changeColor() {
  text.style.color = text.style.color === 'black' ? 'red' : 'black';
}

function changeFontSize() {
  text.style.fontSize = text.style.fontSize === '20px' ? '30px' : '20px';
}

function toggleBorder() {
  text.style.border = text.style.border === '1px solid black' ? '3px dashed blue' : '1px solid black';
}