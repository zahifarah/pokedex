import React, { Component } from "react";

class Pokecard extends Component {
  render() {
    const API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`;

    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={API} alt="" />
        <h2>{this.props.type}</h2>
        <h2>{this.props.base_experience}</h2>
      </div>
    );
  }
}

export default Pokecard;
