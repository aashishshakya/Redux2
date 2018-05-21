import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import reducer from "./reducers";
import { createStore } from "redux";
import { Todos, AddTodos } from "./actions";

const store = createStore(reducer,[{val:'ss'}]);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello
      name="CodeSandbox"
      val={store.getState()}
      onClick={() => {
        console.log("dd");
        store.dispatch(Todos());
      }}
      onAddTodo={(value) => {
        store.dispatch(AddTodos(value));
      }}
    />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

const nn = () => {
  render(<App />, document.getElementById("root"));
};
nn();
store.subscribe(nn);
