import React, { Component } from "react";
import "./Pokecard.css";

const IMG_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;

    const img_src = `${IMG_API}${padToThree(id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-image">
          <img src={img_src} alt={name} />
        </div>
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">Exp: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
