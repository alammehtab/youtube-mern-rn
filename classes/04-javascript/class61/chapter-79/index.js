// Chapter-79: Browser control: Filling the window with content

// OPEN A NEW POPUP TAB/WINDOW
// var monkeyWindow = window.open();

// FILLING A WINDOW WITH CONTENT- METHOD 1: DOCUMENT.WRITE

// html content to put in the newly opened tab/popup window
// var windowContent = `<h1>My Bicycle</h1><img src='./bicycle.webp' width="100px" height="100px"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia ab omnis enim labore hic ullam totam, provident reprehenderit illum.</p>`;
// monkeyWindow.document.write(windowContent);

// FILLING A WINDOW WITH CONTENT- METHOD 2: LOCATION.ASSIGN()
// monkeyWindow.location.assign("https://www.w3schools.com/js/default.asp")
// or
// monkeyWindow.location.href = "https://www.w3schools.com/js/default.asp"

// FILLING A WINDOW WITH CONTENT- METHOD 2: Opening a Specific URL Directly

// var monkeyWindow = window.open("https://www.w3schools.com/js/default.asp")

// close original
// window.close()

// close popup window
// monkeyWindow.close()
