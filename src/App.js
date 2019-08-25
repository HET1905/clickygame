import React from 'react';
import Header from "./components/Header/Header";
import HeroDiv from "./components/HeroDiv/HeroDiv";
import Pokemon from "./components/Pokemon/Pokemon";
import pokemonList from "./pokemonList.json";

import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <HeroDiv />
      <div id="imgOuterDiv">
        {pokemonList.map(pokemonImg => (
          <Pokemon
            key = {pokemonImg.id}
            image = {pokemonImg.image}
            name = {pokemonImg.name}
          />
        ))};
      </div>
      
    </div>
  );
}

export default App;
