// browser back button
function goBack() {
  history.back();
}

// browser forward button
function goForward() {
  history.forward();
}

// where the user came from
// to find it we created multiple pages in our project
const apKahaSeAye = document.referrer;
console.log(apKahaSeAye);
