//Method 3:final..
const { readFile, writeFile } = require("fs").promises;
const startOperation = async () => {
  try {
    const first = await readFile("./current/first.txt", "utf8");
    const sec = await readFile("./current/second.txt", "utf8");
    await writeFile(
      "./current/subfolder/output_m3.txt",
      `\nOutput: \n${first}\n ${sec}`,
      { flag: "a" }
    );
  } catch (error) {
    console.log(error);
  }
};
startOperation();
//Method 1..
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// };
// const printText = async () => {
//   try {
//     console.log(await getText("./current/first.txt"));
//   } catch (error) {
//     console.log(error);
//   }
// };
// printText();
//Method 2..
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const startOperation = async () => {
//   try {
//     const first = await readFilePromise("./current/first.txt", "utf8");
//     const second = await readFilePromise("./current/second.txt", "utf8");
//     await writeFilePromise(
//       "./current/subfolder/utilWrite.txt",
//       `Output \n ${first}\n ${second}\n`,
//       { flag: "a" }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
// startOperation();
