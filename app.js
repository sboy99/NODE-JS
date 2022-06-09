const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // const file = fs.readFileSync("./current/subfolder/bigFile.txt");
  // res.end(file)
  const stream = fs.createReadStream("./current/subfolder/bigFile.txt", {
    encoding: "utf8",
  });
  stream.on("open", (chunk) => {
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    res.end(err);
  });
});
server.listen(5000, () => {
  console.log("Listening to port 5000..");
});
