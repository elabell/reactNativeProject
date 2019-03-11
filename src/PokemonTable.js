import React, { Component } from "react";
import PokemonTableCell from "./PokemonTableCell";

class PokemonTable extends Component {
  render() {
    return (
      <div id="PokemonListTable" style={{ display: "flex", flexWrap: "wrap" }}>
        {this.props.urls.map((url, index) => (
          <PokemonTableCell
            key={index}
            url={url}
            onClick={this.handleOnClickReturn}
          />
        ))}
      </div>
    );
  }

  handleOnClickReturn = input => {
    this.props.onClick(input);
  };
}

export default PokemonTable;
