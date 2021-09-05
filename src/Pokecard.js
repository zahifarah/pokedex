import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`;

    console.log(this.props);

    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={POKE_API} alt="this.props.name" />
        <div>
          <h2>{this.props.type}</h2>
        </div>
        <div>
          <h2>{this.props.base_experience}</h2>
        </div>
      </div>
    );
  }
}

export default Pokecard;
