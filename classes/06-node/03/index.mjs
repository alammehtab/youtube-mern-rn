// read file syncronously
// import fs from 'node:fs'

// const data = fs.readFileSync('./our-file.txt','utf8')
// console.log(data)

// read file asyncronously
// using just required stuff for small file size
// import { readFile } from 'node:fs/promises';

// const data = await readFile('./our-file.txt', 'utf8')
// console.log(data)

// Writing to a File Synchronously
// import { writeFileSync } from 'node:fs'

// const content = 'content written through write file sync'
// const content1 = 'writing again'
// writeFileSync('write-file-sync.txt', content1)
// console.log('File written successfully');

//  Writing to a File Asynchronously:
// import { writeFile } from 'node:fs/promises';

// async function writeContent() {
//     const content = "content written asyncronously using async function"
//     await writeFile('write-file-async.txt', content)
//     console.log("File written successfully!")
// }
// writeContent()

// append content to the file
// handling errors as well
// import { appendFile } from 'node:fs/promises'

// async function appendFileAsync() {
//     try {
//         const additionalContent = '\nSome chages.';
//         await appendFile('append-file-async.txt', additionalContent);
//         console.log('Content appended successfully');
//     } catch (err) {
//         console.error('Error appending to file:', err);
//     }
// }

// appendFileAsync();

// deleting files
// import {unlink} from 'node:fs/promises'

// async function deleteFileAsync() {
//     try {
//         await unlink('fly.txt');
//         console.log('File deleted successfully');
//     } catch (err) {
//         console.error('Error deleting file:', err);
//     }
// }

// deleteFileAsync();

// creat file inside a directory
// import {writeFile} from 'node:fs/promises'

// async function writeSomething(){
//     try{
//         const content = 'test content'
//         await writeFile("./test-folder/test.txt",content)
//     }catch(err){
//         console.log("Error writing file: ",err)
//     }
// }

// writeSomething()