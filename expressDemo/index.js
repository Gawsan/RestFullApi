const express = require("express");

const app = express();
app.use(express.json());

const courses = [
  { id: 1, name: "Gawsan" },
  { id: 2, name: "Rocky" },
  { id: 3, name: "Kaanu" },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("The given Id not Found");
  }
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send("Wrong Data");
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

//PORTS
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening port on ${port}...`));
