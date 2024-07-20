// Chapter-25: Strings: Replacing characters

// method: replace

// EXAMPLES
// var fruit = "apple";
// var modifiedVersion = fruit.replace("a", "A");
// console.table([fruit, modifiedVersion]);

// var exampleText = "ye hamara example text ha";
// var replacedVersion = exampleText.replace("hamara", "apka");
// console.table([exampleText, replacedVersion]);

// var text = "sunaye kese hn ap?";
// var afterReplace = text.replace("sunaye", "");
// console.table([text, afterReplace]);

// var text = "sunaye kese hn ap";
// var afterReplace = text.replace("ap", "ap?");
// console.table([text, afterReplace]);

// var text = "hello, how are you doing?";
// text = text.replace("doing", "doing buddy");
// console.log(text);

// REAL-WORLD USE CASES

// REPLACE SOMETHING ONCE
// var text = "excuse me, shut up!,i'm my own boss. shut up";
// var cleanText = text.replace("shut up", "...");
// console.table([text, cleanText]);

// REPLACE SOMETHING EVERYWHERE
// var text = "excuse me, shut up!,i'm my own boss. shut up";
// var cleanText = text.replace(/shut up/g, "...");
// console.table([text, cleanText]);