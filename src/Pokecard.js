import React, { Component } from "react";
import "./Pokecard.css";

// const OLD_POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`;

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    let imgSrc = `${POKE_API}${padToThree(id)}.png`;

    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{name}</h2>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="Pokecard-data">{type}</div>
        <div className="Pokecard-data">{base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
