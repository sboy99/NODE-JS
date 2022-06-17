const express = require("express");
const app = express();

const peopleRouter = require("./routes/people");
// Middleware..
app.use(express.json());

//Router
app.use("/api/people", peopleRouter);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

app.listen(5000, () => {
  console.log(`5000...`);
});
