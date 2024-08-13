function styleAllParagraphs() {
  // Target all paragraphs by tag name
  var paragraphs = document.getElementsByTagName('p');

  // Loop through all paragraphs and apply a style
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.add('styled');
  }
}