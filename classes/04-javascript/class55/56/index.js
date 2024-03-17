function changeParagraphs() {
  const allParagraphs = document.getElementsByTagName("p");

  //   styling single element
  //   allParagraphs[1].style.color = "green";

  //   styling them all
  for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].style.color = "green";
  }
}
