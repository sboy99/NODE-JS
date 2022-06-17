const express = require("express");
const { people } = require("./data");
const { resolve } = require("path");
const app = express();
//Express Static
app.use("/form", express.static(resolve(__dirname, "./PostForm")));
//Express Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const recieveId = () => {
  return people[people.length - 1].id + 1;
};

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  // const person = { id: recieveId(), ...req.body };

  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: `Feild must be filled` });
  } else res.status(201).send({ success: true, name: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Wecome ${name}`);
  } else {
    res.status(401).json("Name is required..");
  }
});

app.listen(5000, () => {
  console.log(`Port:5000`);
});
