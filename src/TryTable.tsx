import React, { Component, ChangeEvent } from "react";
import "./App.css";
import TryList from "./TryList";

class TryTable extends Component {
  render() {
    return (
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
    );
  }
}

export default TryTable;
