import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`;

    console.log(this.props);

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={POKE_API} alt="this.props.name" />
        <div className="Pokecard-data">{this.props.type}</div>
        <div className="Pokecard-data">{this.props.base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
