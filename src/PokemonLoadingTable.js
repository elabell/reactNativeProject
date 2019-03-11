import React, { Component } from "react";
import PokemonTable from "./PokemonTable";
import LoadingPokemon from "./LoadingPokemon";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class PokemonLoadingTable extends Component {
  state = {
    urls: [],
    pokemonSearchUrl: "",
    searchInput: "",
    count: 0,
    page: 0,
    pokemonChosen: -1,
    loading: false
  };

  componentDidMount() {
    this.loadUrls();
  }

  fetchData = URL => fetch(URL).then(response => response.json());

  loadUrls = () => {
    const limit = 20;
    const jsonPath = `https://pokeapi.co/api/v2/pokemon/?offset=${this.state
      .page * limit}&limit=${limit}`;
    const getUrl = result => result.url;

    fetch(jsonPath)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          urls: [...state.urls, ...data.results.map(getUrl)],
          count: data.count
        }));
      });
  };
  handleClick = input => {
    this.setState({ pokemonSearchUrl: "/pokemon/Url/" + (input - 1) });
  };

  handleLoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }), this.loadUrls);
  };

  render() {
    return (
      <div id="PokemonTable">
        <PokemonTable urls={this.props.route.urls} onClick={this.handleClick} />
      </div>
    );
  }
}
