import React from 'react';
import {Component} from 'react';

import Header from "./components/Header/Header";
import HeroDiv from "./components/HeroDiv/HeroDiv";
import Pokemon from "./components/Pokemon/Pokemon";
import pokemonList from "./pokemonList.json";

import './App.css';

// function App() {
  class App extends Component{
    state={
      score:0
    };
    
    imgClick = (id) => {
      alert('Img :' + id);
    };

  render(){
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
              imgClick = {this.imgClick}
            />
          ))};
        </div>
      </div>
    );
  }
}

export default App;
