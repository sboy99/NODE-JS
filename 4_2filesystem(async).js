//     Asynchronous func()..
const { readFile, writeFile } = require("fs");

readFile("./current/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./current/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./current/subfolder/result-async.txt",
      `Your Result:\n  ${first}\n  ${second}\n`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
