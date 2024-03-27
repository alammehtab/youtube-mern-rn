// Chapter-41: while loops

// EXAMPLE PROGRAM USING FOR LOOP
for (let i = 0; i <= 3; i++) {
  alert(i);
}

// FOR LOOP EXPLAINATION
// All the how-to-loop directions are packed into the space between the parentheses: where
// to start the counter, how long to keep the loop going, and how to update the counter each time through.

// SAME PROGRAM USING WHILE LOOP
let i = 0;
while (i <= 3) {
  alert(i);
  i++;
}

// WHILE LOOP EXPLAINATION
// A while loop does the same thing, but it's organized differently. Only the middle term,
// how long to keep the loop going, is inside the parentheses. The counter is defined before the first line of the while block. The counter is updated within the code that executes when the loop runs.
