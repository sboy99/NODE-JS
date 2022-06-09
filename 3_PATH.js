const path = require("path");
console.log(path.sep); //Shows Separator
const filepath = path.join(__dirname, "3_PATH.js"); //Join Path * __dirname returns current directory path
const base = path.basename(filepath); // Shows the target file or folder
const absolute = path.resolve(__dirname, "3_PATH.js");
console.log(absolute);
