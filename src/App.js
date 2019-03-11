import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PokemonTable from "./PokemonTable";
import PokemonListInformations from "./PokemonListInformations";
import PokemonResearchOptions from "./PokemonResearchOptions";
import LoadingPokemon from "./LoadingPokemon";
import Details from "./Details";

const PokemonSpriteURL = "https://pokeapi.co/api/v2/pokemon/";
const PokemonSpeciesURL = "https://pokeapi.co/api/v2/pokemon-species/";
const pokemonCount = 806;
const trWidth = 10;

/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

class App extends React.Component {
  state = {
    urls: [],
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
  /*handleClick = input => {
    this.setState({ chosenPokemon: input });
    console.log("input");
  };*/

  handleClick = input => {
    this.setState({ chosenPokemon: input }, () => {
      console.log("input");
      window.location.href =
        "https://kky2vpylz5.codesandbox.io/details/" + this.state.chosenPokemon;
    });
  };

  handleLoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }), this.loadUrls);
  };

  updateResearchInput = input => {
    console.log(input);
    this.setState(
      { searchInput: input },
      this.state.urls.reduce(singleUrl => {
        return singleUrl.name.includes(this.state.searchInput.toLowerCase());
      })
    );
  };

  render() {
    if (this.state.loading) {
      return <LoadingPokemon />;
    } else if (this.state.pokemonChosen === -1) {
      return (
        <div id="PokemonWebsite">
          <PokemonResearchOptions
            count={this.state.count}
            researchListEvent={this.updateResearchInput}
          />
          <div id="PokedexList">
            <PokemonListInformations count={this.state.count} />
            <h2>Tableau des pokémons</h2>
            <PokemonTable urls={this.state.urls} onClick={this.handleClick} />
            <button style={{ margin: 20 }} onClick={this.handleLoadMore}>
              Load more
            </button>
          </div>
        </div>
      );
    } else {
      console.log("Pokémon choisi");
      return (
        <div id="PokemonWebsite">
          <PokemonResearchOptions
            count={this.state.count}
            researchListEvent={this.updateResearchInput}
          />
          <Details />
        </div>
      );
    }
  }
}

export default App;
