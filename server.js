const express = require("express");

// create an express server with in-memory data to save notes
const app = express();
app.use(express.json());

const notes = [
  { id: 1, title: "笔记 1", content: "这是笔记 1", likes: 0 },
  { id: 2, title: "笔记 2", content: "这是笔记 2", likes: 0 },
  { id: 3, title: "笔记 3", content: "这是笔记 3", likes: 0 },
  { id: 4, title: "笔记 4", content: "这是笔记 4", likes: 0 },
];

// enable CORS
app.use(function (req, res, next) {
  // 2. 限制 CORS，并演示一下 CORS 的错误
  // res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// GET /notes?term=  search notes by content
app.get("/notes", (req, res) => {
  // 1. 还原正常代码
  const term = req.query.term;
  if (term) {
    const filteredNotes = notes.filter((note) => note.content.includes(term));
    res.json(filteredNotes);
  } else {
    res.json(notes);
  }

  // res.status(500).json({ message: "加载笔记列表出错" });
});

// GET note by id
app.get("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "笔记不存在" });
  }
});

app.post("/notes", (req, res) => {
  const note = req.body;
  note.id = notes.length + 1;
  notes.push(note);
  res.json(note);
});

// PUT update note
app.put("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    Object.assign(note, req.body);
    res.json(note);
  } else {
    res.status(404).json({ message: "笔记不存在" });
  }
});

// DELETE delete note by id
app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    res.json({ message: "删除成功" });
  } else {
    res.status(404).json({ message: "笔记不存在" });
  }
});

// listen on port 8080
app.listen(8080, () =>
  console.log("Server listening on http://localhost:8080")
);
