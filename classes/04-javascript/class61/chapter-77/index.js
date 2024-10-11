// Chapter-77: Browser control: Getting and setting the URL another way

// ASSIGN METHOD (can go back, page is stored in the history)
// window.location.assign('https://www.youtube.com')

// REPLACE METHOD (can't go back, page isn't stored in the history)
// window.location.replace('http://www.google.com')

// RELOAD CURRENT PAGE 
// window.location.reload(true); // Reloads from server
// window.location.reload(false); // Reloads from cache
// window.location.reload(); // Default: cache
