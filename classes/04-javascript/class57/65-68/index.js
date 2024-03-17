// CHAPTER-65: ATTRIBUTES
const bike = document.getElementById("bikeKiImg");

// CHECK WHETHER AN ATTRIBUTE EXISTS OR NOT
// const doesExist = bike.hasAttribute("src");

// GET SINGLE ATTRIBUTE
// const bikeKiWidth = bike.getAttribute("src");

// SET AN ATTRIBUTE ON AN ELEMENT
// bike.setAttribute("alt", "hamari nayi cycle");

// CHAPTER-66: ATTRIBUTE NAMES AND VALUES

// GET ALL ATTRIBUTES
// const bikeKAttributes = bike.attributes;

// GET NODE-NAME AND NODE-VALUE
// const noOfAttributes = bikeKAttributes.length;
// const srcNodeName = bikeKAttributes[0].nodeName;
// const srcNodeValue = bikeKAttributes[0].nodeValue;

// CHAPTER-67: ADDING NODES
// const wantedDiv = document.getElementById("wanted");
// const pNode = document.createElement("p");
// const para00 = document.getElementById("para00");

// const newTxt = document.createTextNode("Hello!");
// pNode.appendChild(newTxt);

// pNode.innerText = "hello hello";

// appends at bottom
// wantedDiv.appendChild(pNode);

// CHAPTER-68: INSERTING NODES

// insert a node before an already existed node
// wantedDiv.insertBefore(pNode, para00);

// insert a node before an already existed node, using nextSibling
// wantedDiv.insertBefore(pNode, para00.nextSibling);

// remove a child
// const parentNode = document.getElementById("wanted");
// const childToBeRemoved = document.getElementById("para01");
// parentNode.removeChild(childToBeRemoved);

// console.log(p);
