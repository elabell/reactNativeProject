import React, { Component } from "react";
class PokemonTableCell extends Component {
  state = {
    loading: false,
    pokemon: null,
    error: null
  };

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    this.setState({ loading: true });

    fetch(this.props.url)
      .then(res => res.json())
      .then(pokemon => {
        this.setState({ pokemon, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  onClick() {
    this.props.onClick(this.state.pokemon.id);
  }

  render() {
    return (
      <div
        id="pokeTable"
        style={{
          marginTop: 20,
          height: 120
        }}
      >
        {this.state.loading && "Loading..."}
        {this.state.error && "Error :("}
        {!this.state.loading &&
          !this.state.error &&
          this.state.pokemon &&
          this.state.pokemon.name.includes(this.props.input) &&
          ""}
        {!this.state.loading && !this.state.error && this.state.pokemon && (
          <React.Fragment>
            <img
              onClick={() => this.onClick()}
              alt={this.state.pokemon.name}
              src={this.state.pokemon.sprites.front_default}
            />
            <p>{this.state.pokemon.name}</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PokemonTableCell;
