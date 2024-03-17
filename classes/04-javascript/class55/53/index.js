// without using arguments

// function swapImages() {
//   document.getElementById("imageToSwap").src = "./images/bike.webp";
// }

// using arguments for id and path
function swapImages(elementId, elementSrc) {
  document.getElementById(elementId).src = elementSrc;
}
