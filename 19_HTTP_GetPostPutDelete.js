const express = require("express");
const app = express();
let { people, products } = require("./data");
// Middleware..
app.use(express.json());

const recieveId = (array) => {
  return array[array.length - 1].id + 1;
};

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

// /api/people
app.get("/api/people", (req, res) => {
  res.status(200).send(people);
});
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(201).json({ success: true, name });
  } else {
    res
      .status(400)
      .json({ success: false, msg: `name must have to have data` });
  }
});

// /api/postman/people

//get
app.get("/api/postman/people", (req, res) => {
  res.status(200).json({ data: [...people] });
});

//post
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;

  if (name) {
    const person = { id: recieveId(people), name };
    people = [...people, person];
    res.status(201).json({ success: true, data: [...people] });
  } else {
    res
      .status(401)
      .json({ success: false, msg: `name must have to have data` });
  }
});

//put
app.put("/api/postman/people/:id", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, msg: `name is required..` });
  }
  let found = 0;
  people = people.map((person) => {
    if (person.id === Number(req.params.id)) {
      found = 1;
      person.name = name;
    }
    return person;
  });

  if (found) {
    res.status(200).json({ success: true, data: people });
  } else {
    res.status(404).json({
      success: false,
      msg: `Can't found anythinh with id:${req.params.id}`,
      data: people,
    });
  }

  // res.status(200).json{}
});

//delete
app.delete("/api/postman/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `Can't find any data with id:${req.params.id}`,
      data: people,
    });
  }
  people = people.filter((person) => person.id !== Number(req.params.id));
  res.status(200).json({ success: true, data: people });
});

app.get("/api/products", (req, res) => {
  res.status(200).send(products);
});

app.listen(5000, () => {
  console.log(`5000...`);
});
