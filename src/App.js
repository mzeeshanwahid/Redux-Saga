import React, { Component } from 'react';
import './App.css';
import Home from "./Home";

import store from "./store";
import { Provider } from "react-redux";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Home />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
