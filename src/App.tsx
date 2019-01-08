import React, { Component, ChangeEvent } from "react";
import "./App.css";
import AddTry from "./AddTry";
import NewGame from "./NewGame";
import TryTable from "./TryTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewGame />
        <AddTry />
        <TryTable />
      </div>
    );
  }
}

export default App;
