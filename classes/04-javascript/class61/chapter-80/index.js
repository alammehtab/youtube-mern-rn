// Chapter-80: Browser control: Controlling the window's size and location

// 1. OPENING A POPUP WITH A NAME

// without name
// var monkeyWindow = window.open()

// fill url
// var monkeyWindow = window.open("test.html")

// provide url and name both
// var monkeyWindow = window.open("test.html", "_parent")

// 2. CONTROLLING THE WINDOWS SIZE
// window.open("test.html", " ", "width=200,height=200")

// 3. POSITIONING THE WINDOW ON THE SCREEN
// window.open("test.html", " ", "width=250,height=250,top=400,left=500")

// 4. COMBINING SIZE AND POSITION PARAMETERS IN A VARIABLE
// var windowSpecs = "width=250,height=250,top=400,left=500"
// window.open("test.html", " ", windowSpecs)