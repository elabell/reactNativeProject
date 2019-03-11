import React, { Component } from "react";
class PokemonResearchOptions extends Component {
  render() {
    return (
      <div id="researchOptions">
        <div id="logo">
          <img src="https://i.ibb.co/D8Vz4yY/9c598342da79e54947f22239c52b1ad87939ab22e7ebd6a7074152034c3797bbab070f0b6ae01058da39a3ee5e6b4b0d3255bfef95601890afd807094d185510f5e0f602fe47a7e35c58927c.png" />
        </div>
        <div id="researchOptionsInput">
          <p>Il y a actuellement {this.props.count} pokÃ©mons repertoriÃ©s.</p>
        </div>
        <div id="creators">CrÃ©Ã© par NoÃ© COLIN et Quentin CHAPEL</div>
      </div>
    );
  }
}
export default PokemonResearchOptions;
