// Reading and Setting Paragraph Text

// Function to read paragraph text
function readParagraphText() {
  var paragraph = document.getElementById('myParagraph');
  var output = document.getElementById('output');
  var paragraphText = paragraph.textContent;
  output.textContent = 'Current paragraph text: "' + paragraphText + '"';
}

// Function to set new paragraph text
function setParagraphText() {
  var paragraph = document.getElementById('myParagraph');
  var newTextInput = document.getElementById('newTextInput');
  var output = document.getElementById('output');
  var newText = newTextInput.value;

  if (newText.trim() === '') {
    output.textContent = 'Please enter some text to set!';
  } else {
    paragraph.textContent = newText;
    output.textContent = 'Paragraph text has been updated!';
    newTextInput.value = '';
  }
}
