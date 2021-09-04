import React, { Component } from "react";
import "./App.css";
import Pokecard from "./Pokecard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard id="4" name="Charmander" type="fire" base_experience="62" />
      </div>
    );
  }
}

export default App;
