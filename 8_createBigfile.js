const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./current/subfolder/bigFile.txt", `Say Hi ${i + 1}\n`, {
    flag: "a",
  });
}
