import { useRef, useState } from "react";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import "./App.css";
import { useEffect } from "react";
import { createRef } from "react";
function App() {
  const [listData, setListData] = useState([
    { id: 1, value: 1, nodeRef: useRef(null) },
    { id: 2, value: 2, nodeRef: useRef(null) },
    { id: 3, value: 3, nodeRef: useRef(null) },
  ]);

  return (
    <main className="container">
      <ul>
        <TransitionGroup>
          {listData.map(({ id, value, nodeRef }) => (
            <CSSTransition
              key={id}
              nodeRef={nodeRef}
              classNames="fade"
              timeout={1000}
            >
              <li ref={nodeRef}>
                {value}{" "}
                <button
                  onClick={() =>
                    setListData((data) => data.filter((item) => item.id !== id))
                  }
                  style={{
                    padding: "4px",
                    marginLeft: "8px",
                    border: "4px",
                    backgroundColor: "transparent",
                  }}
                >
                  删除
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <button
        onClick={() => {
          setListData((data) => [
            ...data,
            {
              id: data.length + 1,
              value: data.length + 1,
              nodeRef: createRef(null),
            },
          ]);
        }}
      >
        添加项目
      </button>
    </main>
  );
}

export default App;
