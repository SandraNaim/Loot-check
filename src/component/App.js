import React, { Component } from "react";
import Loot from "./Loot";
import Wallet from "./Wallet";

const App = () => {
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

export default App;
