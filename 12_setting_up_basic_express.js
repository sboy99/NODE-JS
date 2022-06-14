const app = require("express")();
const port = process.env.PORT || 5000;
//app.use
//app.get
app.get("/", (req, res) => {
  res.status(200).send("Hello World..");
});
app.get("/about", (req, res) => {
  res.status(200).send("About Page..");
});
//app.all : Applicable for all kind of actions..
app.all("*", (req, res) => {
  res.status(404).send("<h1>File Not Found</h1>");
});
//app.post
//app.put
//app.delete
//app.listen
app.listen(port, () => {
  console.log(`Listening to Port:${port}...`);
});
