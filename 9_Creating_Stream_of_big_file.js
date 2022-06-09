// Sending Chunk Of File instead of sending whole
const { createReadStream } = require("fs");
const stream = createReadStream("./current/subfolder/bigFile.txt", {
  //creating a stream from where big file can flow
  highWaterMark: 90000, //Changing default chunk size [default: 64kb]
  encoding: "utf8", //Changing encoding by default send buffer data
});
stream.on("data", (chunk) => {
  //Capturing the chunk though an callback function id data is available.
  console.log(chunk.length);
  console.log(chunk);
});
stream.on("error", () => {
  //Declaring on error event action
  console.log(err);
});
