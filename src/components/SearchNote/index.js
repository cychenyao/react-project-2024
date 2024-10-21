import "./style.css";
import {Form, useSubmit} from "react-router-dom";
function SearchNote() {

  const submit = useSubmit();

  return (
    <div className="search">
      <Form >
        <input name="term" type="search" placeholder="搜索笔记" 
        onChange={event}
        />
      </Form>
    </div>
  );
}

export default SearchNote;
