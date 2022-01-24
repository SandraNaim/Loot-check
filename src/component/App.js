import React, { Component } from "react";
import Loot from "./Loot";
import Wallet from "./Wallet";

class App extends Component {
  render(){
    return (
      <div>
        <div>Loot Check</div>
        <hr />
        <Wallet />
        <hr />
        <Loot />
      </div>
      
    )
  }
}

export default App;
