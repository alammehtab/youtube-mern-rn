// Get all <li> elements
const listItems = document.getElementsByTagName('li');

// Highlight even items (applying onclick on each element)
// document.getElementById('highlightEven').onclick = function () {
//   for (let i = 0; i < listItems.length; i++) {
//     if ((i + 1) % 2 === 0) { // even 
//       listItems[i].classList.add('highlight');
//     }
//   }
// };

// Highlight even items (using addEvenetListener)
document.getElementById('highlightEven').addEventListener('click', function () {
  for (let i = 0; i < listItems.length; i++) {
    if ((i + 1) % 2 === 0) { // even 
      listItems[i].classList.add('highlight');
    }
  }
})

// Highlight odd items
document.getElementById('highlightOdd').onclick = function () {
  for (let i = 0; i < listItems.length; i++) {
    if ((i + 1) % 2 !== 0) { // odd
      listItems[i].classList.add('highlight');
    }
  }
};

// Reset all items
document.getElementById('reset').onclick = function () {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove('highlight');
  }
};