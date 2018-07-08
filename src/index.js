import React from "react";
import ReactDOM from "react-dom";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import { Provider } from "react-redux";

import "./styles.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
