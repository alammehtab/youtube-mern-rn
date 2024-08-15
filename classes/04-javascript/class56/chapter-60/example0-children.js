// Select the parent element
var parentDiv = document.getElementById('parentDiv');

// Get all child elements
var childElements = parentDiv.children;

console.log('All Child Elements:', childElements);

// Loop through child elements and change their text color
for (var i = 0; i < childElements.length; i++) {
    childElements[i].style.color = 'blue';
}
