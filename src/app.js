import React, { Component } from "react";

export default class App extends Component {
  render() {
    return <div>
      <h1>Click on Those</h1>
      <button onClick={this.load}>Load</button>
      <button onClick={this.change}>Change</button>
    </div>
  }

  load() {
    alert("load");
  }

  change() {
    alert("change");
  }

}
class Test {
  constructor (msg) {
    
  }
}