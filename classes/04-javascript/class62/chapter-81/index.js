// Chapter 81: Browser Control - Testing for Popup Blockers

// TEST FOR POPUP BLOCKER
// var testPop = window.open("", "", "width=100,height=100");
// if (testPop === null) {
//     alert("Please disable your popup blocker.");
// } else {
//     // alert("Popup blocker is disabled on your computer.")
//     testPop.close();
// }

// convert above code to function, call it onload in html body
function checkForPopBlocker() {
    var testPop = window.open("", "", "width=100,height=100");
    if (testPop === null || typeof (testPop) === "undefined") {
        alert("Please disable your popup blocker.");
    } else {
        // alert("Popup blocker is disabled on your computer.")
        testPop.close();
    }
}