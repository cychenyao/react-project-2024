import "./style.css";
function NoteForm() {
  const note = {};

  return (
    <div className="addNote">
      <h2>{note ? "编辑笔记" : "添加新笔记"}</h2>
      <form>
        <input type="text" placeholder="请输入笔记标题" />
        <textarea rows="6" placeholder="请输入笔记内容"></textarea>
        <div className="formActions">
          <button type="submit">{note ? "保存笔记" : "添加笔记"}</button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
