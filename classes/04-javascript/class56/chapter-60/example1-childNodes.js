var parentDiv = document.getElementById("parentDiv")

// Get all child nodes
var allNodes = parentDiv.childNodes;
// console.log('All Child Nodes:', allNodes);

// Loop through child nodes
for (var i = 0; i < allNodes.length; i++) {
    // Check if the node is an element
    if (allNodes[i].nodeType === 1) {
        allNodes[i].style.backgroundColor = 'lightgray';
    }
}
