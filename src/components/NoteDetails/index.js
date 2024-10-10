import "./style.css";

function NoteDetails() {
  const note = { title: "测试标题", content: "测试内容", likes: 10 };

  return (
    <div>
      <h2 className="noteTitle">{note.title}</h2>
      <div className="noteActions">
        <a href="edit">编辑</a>
        <form>
          <button type="submit">删除</button>
        </form>
        <form>
          <button type="submit">点赞 {note.likes}</button>
        </form>
      </div>
      <article>{note.content}</article>
    </div>
  );
}

export default NoteDetails;
