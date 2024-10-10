import React, { useState } from "react";
import "./style.css";

function AddNote({ onSubmit }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    onSubmit({title, content});
  }
  return (
    <div className="addNote">
      <h2>添加新笔记</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="请输入笔记标题" />
        <textarea rows="6" value={content} onChange={(e)=>setContent(e.target.value)} placeholder="请输入笔记内容"></textarea>
        <button type="submit">添加笔记</button>
      </form>
    </div>
  );
}

export default AddNote;
