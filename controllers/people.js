let { people } = require("../data");

//Additional funcs
const recieveId = (array) => {
  return array[array.length - 1].id + 1;
};

const readPeople = (req, res) => {
  res.status(200).send(people);
};

const createPeople = (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(201).json({ success: true, name });
  } else {
    res
      .status(400)
      .json({ success: false, msg: `name must have to have data` });
  }
};

const readPostman = (req, res) => {
  res.status(200).json({ data: [...people] });
};

const createPostman = (req, res) => {
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
};

const updatePostman = (req, res) => {
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
};

const deletePostman = (req, res) => {
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
};

module.exports = {
  readPeople,
  readPostman,
  createPeople,
  createPostman,
  updatePostman,
  deletePostman,
};
