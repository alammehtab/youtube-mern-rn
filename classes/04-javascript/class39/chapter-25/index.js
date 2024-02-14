// Chapter-25: Strings: Replacing characters

// method: replace

// EXAMPLES
// const fruit = "apple";
// const modifiedVersion = fruit.replace("a", "A");
// console.log(fruit);
// console.log(modifiedVersion);

// const exampleText = "ye hamara example text ha";
// const replacedVersion = exampleText.replace("hamara", "apka");
// console.log(exampleText);
// console.log(replacedVersion);

// const text = "sunaye kese hn ap?";
// const afterReplace = text.replace("sunaye", "");
// console.log(text);
// console.log(afterReplace);

// const text = "sunaye kese hn ap";
// const afterReplace = text.replace("ap", "ap?");
// console.log(text);
// console.log(afterReplace);

// let text = "hello, how are you doing?";
// text = text.replace("doing", "doing buddy");
// console.log(text);

// REAL-WORLD USE CASES

// REPLACE SOMETHING ONCE
// const text = "excuse me, shut up!,i'm my own boss. shut up";
// const cleanText = text.replace("shut up", "...");
// console.log(text);
// console.log(cleanText);

// REPLACE SOMETHING EVERYWHERE
const text = "excuse me, shut up!,i'm my own boss. shut up";
const cleanText = text.replace(/shut up/g, "...");
console.log(text);
console.log(cleanText);
