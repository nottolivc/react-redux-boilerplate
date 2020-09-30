import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <h1 className="App-title">Welcome to React-Redux Template</h1>
            <h4>(includes activation of redux tools, pulls from dummy API)</h4>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
