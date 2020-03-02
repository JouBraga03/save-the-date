import React from "react";

import LayoutDefault from "./pages/layout/default";

import { Provider } from "react-redux";

import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LayoutDefault />
      </div>
    </Provider>
  );
}

export default App;
