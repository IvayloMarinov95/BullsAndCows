import React, { Component, ChangeEvent } from "react";
import "./App.css";
import TryList from "./TryList";
import AddTry from "./AddTry";
import NewGame from "./NewGame";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewGame />
        <AddTry />
        <table className="Table">
          <thead>
            <tr>
              <td>Try</td>
              <td>Guess</td>
              <td>Result</td>
            </tr>
          </thead>
          <TryList />
        </table>
      </div>
    );
  }
}

export default App;
