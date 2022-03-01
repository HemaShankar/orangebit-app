const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3001;
const app = express();

app.use(bodyParser.json());

const employees = [
  {
    id: 1,
    name: "John",
    status: "working",
    img: "http://placekitten.com/200/300",
  },
  {
    id: 2,
    name: "Jack",
    status: "onVacation",
    img: "http://placekitten.com/200/301",
  },
  {
    id: 3,
    name: "Sheli",
    status: "lunchTime",
    img: "http://placekitten.com/200/302",
  },
  {
    id: 4,
    name: "Eitan",
    status: "businessTrip",
    img: "http://placekitten.com/200/303",
  },
	{
    id: 5,
    name: "Hema Shakar",
    status: "working",
    img: "http://placekitten.com/200/304",
  },
  {
    id: 6,
    name: "Robbeca Moore",
    status: "working",
    img: "http://placekitten.com/200/305",
  },
];

app.get("/users", (_, res) => {
	res.send(employees);
});

app.put("/users", (req, res) => {
  try {
    employees.push({
      ...req.body,
      id: employees.length + 1,
      img: `http://placekitten.com/200/${300 + employees.length}`,
    });
    res.send(employees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

app.post("/users", (req, res) => {
  try {
		const index = employees.findIndex((obj) => obj.id === +req.body.id);
    employees[index].status = req.body.status;
    res.send(employees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
