function changeDivParas() {
  const wantedDiv = document.getElementById("wanted");

  const divParagraphs = wantedDiv.getElementsByTagName("p");

  for (let i = 0; i < divParagraphs.length; i++) {
    divParagraphs[i].style.color = "green";
  }
}
