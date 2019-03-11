import React, { Component } from "react";
class Details extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    height: 0,
    weight: 0,
    pokedexId: 0
  };

  fetchData = abilities => fetch(abilities).then(response => response.json());

  componentDidMount() {
    const jsonPath =
      "https://pokeapi.co/api/v2/pokemon/" + this.props.match.params.id;
    const jsonPathSP =
      "https://pokeapi.co/api/v2/pokemon-species/" + this.props.match.params.id;
    const getAbilities = result => result.abilities;

    fetch(jsonPath)
      .then(response => response.json())
      .then(response => {
        this.setState({
          weight: response.weight,
          height: response.height,
          name: response.name,
          id: response.id,
          sprite: response.sprites.front_default
        });
      });

    fetch(jsonPathSP)
      .then(response => response.json())
      .then(response => {
        this.setState({
          forme: response.shape.name,
          color: response.color.name,
          type: response.egg_groups[0].name,
          biome: response.habitat.name
        });
      });
  }

  loadPokemonData(props) {
    const requests = props.map(abilities => this.fetchData(abilities));
    console.log(requests);
  }

  render() {
    return (
      <div id="Details">
        <h1 id="PageTitle">{this.state.name}</h1>
        <div className="box">
          <img id="spriteDetail" src={this.state.sprite} />
          <span id="BasicDetails">
            <div id="BasicDetailsTitle">
              Informations principales de {this.state.name}
            </div>
            <div id="DetailsBox">
              id: {this.state.id} <br />
              type {this.state.type} <br />
              height : {this.state.height} dm <br />
              weight : {this.state.weight} dg <br />
            </div>
          </span>
        </div>
        <div id="MoreDetails">
          <h4>More details about this pokemon: </h4> <br />
          This pokemon is a {this.state.forme}. His color is {this.state.color}.
          You can easly find one of them in {this.state.biome}
        </div>
      </div>
    );
  }
}

export default Details;
