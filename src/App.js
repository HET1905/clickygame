import React from "react";
import { Component } from "react";

import Header from "./components/Header/Header";
import HeroDiv from "./components/HeroDiv/HeroDiv";
import Pokemon from "./components/Pokemon/Pokemon";
import pokemonList from "./pokemonList.json";

import "./App.css";

// function App() {
class App extends Component {
  state = {
    pokemonList,
    score: 0,
    imgAlreadyClicked: [],
    topScore: 0,
    h2Text: "Click on image to begin !!!",
    h2Color: ""
  };

  imgClick = id => {
    if (this.state.imgAlreadyClicked.includes(id)) {
      if (this.state.imgAlreadyClicked.length === 9) {
        if (this.state.score > this.state.topScore) {
          this.setState({
            topScore: this.state.score
          });
        }
        alert(`Game Over...Your Score : ${this.state.topScore} `);
      } else {
        this.setState({
          topScore: this.state.score,
          score: 0,
          h2Text: "Incorrect guess !!!!",
          h2Color: "red"
        });
      }
    } else {
      this.state.imgAlreadyClicked.push(id);

      this.setState({
        score: this.state.score + 1,
        h2Text: "You guessed right !!!",
        h2Color: "green"
      });
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore: this.state.score
        });
      }
    }

    this.state.pokemonList.sort(() => Math.random() - 0.9);

    console.log(this.state.imgAlreadyClicked);
    console.log("Scroe : " + this.state.score);
  };

  gameRestart = () => {
    alert("btn clicked");
    this.setState({
      pokemonList,
      score: 0,
      imgAlreadyClicked: [],
      topScore: 0,
      h2Text: "Click on image to begin !!!",
      h2Color: ""
    });
  };
  // this.setState(prevState => ({ age: prevState.age + 1 }));
  render() {
    return (
      <div className="container-fluid">
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          h2Text={this.state.h2Text}
          h2Color={this.state.h2Color}
          gameRestart={this.gameRestart}
        />
        <HeroDiv />
        <div id="imgOuterDiv">
          {this.state.pokemonList.map(pokemonImg => (
            <Pokemon
              key={pokemonImg.id}
              id={pokemonImg.id}
              clcikCount={pokemonImg.clcikCount}
              image={pokemonImg.image}
              name={pokemonImg.name}
              imgClick={this.imgClick}
              score={this.score}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
