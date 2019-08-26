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
      pokemonList,
      score:0,
      imgAlreadyClicked :[],
      topScore:0
    };
    
    imgClick = (id) => {
      
      if(this.state.imgAlreadyClicked.includes(id)){
        alert(`already img clicked`);
      }else{
        this.state.imgAlreadyClicked.push(id);
        this.setState({
          score : this.state.score + 1
        });
        if(this.state.score>this.state.topScore){
          this.setState({
            topScore:this.state.score
            
          })
        }
      }
            
            this.state.pokemonList.sort(() => Math.random() - 0.9);
           
            console.log(this.state.imgAlreadyClicked);
            console.log("Scroe : " + this.state.score);
     
    };

    // shuffle=pokemonList=> {
    //   this.state.pokemonList.sort(() => Math.random() - 0.5);
    // }

  render(){
    return (
      <div className="container-fluid">
        <Header score = {this.state.score} topScore = {this.state.topScore} />
        <HeroDiv />
        <div id="imgOuterDiv">
          {this.state.pokemonList.map(pokemonImg => (
            <Pokemon
              key = {pokemonImg.id}
              id = {pokemonImg.id}
              clcikCount = {pokemonImg.clcikCount}
              image = {pokemonImg.image}
              name = {pokemonImg.name}
              imgClick = {this.imgClick}
              score = {this.score}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
