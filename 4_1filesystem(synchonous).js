//     Synchronous Read and Write
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("current/first.txt", "utf8");
const second = readFileSync("current/second.txt", "utf8");
writeFileSync(
  "current/subfolder/result-sync.txt",
  `Your Result:\n  ${first}\n  ${second}\n`,
  { flag: "a" }
);
