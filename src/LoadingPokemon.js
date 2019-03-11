import React, { Component } from "react";

class LoadingPokemon extends Component {
  render() {
    return (
      <div id="LoadingPokemons">
        <div id="UpperLeftCorner">
          <img src="https://i.ibb.co/kHjk2vT/corner.png" />
        </div>
        <h1>Projet RÃ©act - Quentin CHAPEL et NoÃ© Colin</h1>
        <img src="https://i.redd.it/fcys3yr59dax.gif" alt="Loading Pokemons" />
        <h1>Chargement en cours</h1>
      </div>
    );
  }
}
export default LoadingPokemon;
