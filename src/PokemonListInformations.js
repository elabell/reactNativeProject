import React, { Component } from "react";

class PokemonListInformations extends React.Component {
  render() {
    return (
      <div id="PokemonListInformations">
        <h1>PokÃ©dex national</h1>
        <p>Actuellement il existe {this.props.count} pokÃ©mons rÃ©pertoriÃ©s</p>
      </div>
    );
  }
}

export default PokemonListInformations;
