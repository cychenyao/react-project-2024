const express = require("express");

// create an express server with in-memory data to save notes
const app = express();
app.use(express.json());

const notes = [
  { id: 1, title: "笔记 1", content: "这是笔记 1" },
  { id: 2, title: "笔记 2", content: "这是笔记 2" },
  { id: 3, title: "笔记 3", content: "这是笔记 3" },
  { id: 4, title: "笔记 4", content: "这是笔记 4" },
];

// enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// GET /notes?term=  search notes by content
app.get("/notes", (req, res) => {
  const term = req.query.term;
  if (term) {
    const filteredNotes = notes.filter((note) => note.content.includes(term));
    res.json(filteredNotes);
  } else {
    res.json(notes);
  }
  // res.status(500).json({ message: "加载笔记列表出错" });
});

app.post("/notes", (req, res) => {
  const note = req.body;
  note.id = notes.length + 1;
  notes.push(note);
  res.json(note);
});

app.use(express.static("build"))

// listen on port 8080
app.listen(8080, () =>
  console.log("Server listening on http://localhost:8080")
);
