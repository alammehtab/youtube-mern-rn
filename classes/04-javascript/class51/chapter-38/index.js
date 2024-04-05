//Chapter-38: Functions: Local vs. global variables

// global variable
// const channelName = "cs with alam";

function printChannelName() {
  // local variable
  const channelName = "cs with alam";
  //   console.log(channelName);
  document.write(channelName + "<br>");
}

// print directly
// console.log(channelName);
document.write(channelName + "<br>");

// print using function
printChannelName();
