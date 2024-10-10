import { useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";
import { useEffect } from "react";
function App() {
  const [current, setCurrent] = useState(1);
  const component1Ref = useRef(null);
  const component2Ref = useRef(null);

  let nodeRef = component1Ref;

  let content = "😜";
  if (current === 1) {
    nodeRef = component1Ref;
    content = "😜";
  }
  if (current === 2) {
    nodeRef = component2Ref;
    content = "😆";
  }

  return (
    <main className="container">
      <button onClick={() => setCurrent((current) => (current === 1 ? 2 : 1))}>
        切换
      </button>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={current}
          nodeRef={nodeRef}
          classNames="fade"
          addEndListener={(done) => {
            nodeRef.current.addEventListener("transitionend", done, false);
          }}
        >
          <div ref={nodeRef}>{content}</div>
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
}

export default App;
