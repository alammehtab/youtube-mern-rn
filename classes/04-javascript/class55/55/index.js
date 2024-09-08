var text = document.getElementById('text');

// Set initial styles
text.style.color = 'black';
text.style.fontSize = '20px';
text.style.border = '1px solid black';

function toggleColor() {
  // without initial styles
  // var currentColor = window.getComputedStyle(text).color;
  // text.style.color = currentColor === 'rgb(0, 0, 0)' ? 'red' : 'black';

  // with initial styles
  var colorToApply = text.style.color === 'black' ? 'red' : 'black';
  text.style.color = colorToApply
}

function toggleFontSize() {
  // var currentFontSize = window.getComputedStyle(text).fontSize
  text.style.fontSize = text.style.fontSize === '20px' ? '30px' : '20px';
}

function toggleBorder() {
  text.style.border = text.style.border === '1px solid black' ? '3px dashed blue' : '1px solid black';
}