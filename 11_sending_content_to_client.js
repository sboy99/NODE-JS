const http = require("http");
const { readFile } = require("fs").promises;
const response = (res, statusCode, textType, content) => {
  res.writeHead(statusCode, { "Content-Type": `text/${textType}` });
  res.write(content);
  res.end();
};
http
  .createServer(async (req, res) => {
    const url = req.url;
    if (url === "/") {
      const File = await readFile("./index.html");
      response(res, 200, "html", File);
    } else if (url === "/about") {
      response(res, 200, "html", "<h1>About Page</h1>");
    } else if (url === "/contact") {
      response(res, 200, "html", "<h1>Contact Page</h1>");
    } else {
      response(res, 404, "html", "<h1>File not Found</h1>");
    }
  })
  .listen(5000, () => console.log("Connected to 5000..."));

/**
 * NOTE:->
 * req and res are two object and needed to be declared as (request,response) order
 * req is a request from client side.It contains a huge object including url.
 * res is a response object,is used to serve client
 * */
