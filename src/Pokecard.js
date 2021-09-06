import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

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
