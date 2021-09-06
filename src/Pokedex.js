import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const { exp, isWinner, player, pokemon } = this.props;
    let title;

    if (isWinner) {
      title = <h2 className="Pokedex-winner">Winner</h2>;
    } else {
      title = <h2 className="Pokedex-loser">Loser</h2>;
    }

    return (
      <div className="Pokedex">
        <h1 className="Pokedex-player">{player}</h1>
        <h4 className="Pokedex-xp">Total Experience: {exp}</h4>
        <div className="Pokedex-result">{title}</div>
        <div className="Pokedex-cards">
          {pokemon.map((p) => {
            return (
              <Pokecard
                key={p.id}
                id={p.id}
                name={p.name}
                type={p.type}
                base_experience={p.base_experience}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
