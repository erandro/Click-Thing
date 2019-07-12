import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import images from "./images.json";
import Card from "./components/Card";
import "./App.css";

class App extends Component {

  state = {
    images,
    clicked: [],
    correctCount: 0,
    bestScore: 0
  };

  shuffle = () => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    this.setState({ images: images });
  }

  checkIfExist = (arr, clickedId) => {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].id === clickedId) {
        return arr[index].id;
      };
    }
  }

  pushCard = id => {
    console.log(`clickrd on card id #${id}`);
    if (this.state.clicked.indexOf(id) === -1) {
      var newClickedArray = this.state.clicked
      newClickedArray.push(id);
      var correctCount = this.state.correctCount + 1
      if (correctCount > this.state.bestScore) {
        var bestScore = correctCount
        this.setState({ clicked: newClickedArray, correctCount: correctCount, bestScore: bestScore });
      } else {
        this.setState({ clicked: newClickedArray, correctCount: correctCount });
      }
    } else {
      console.log("Damn - you clicked that already");
      this.setState({ clicked: [], correctCount: 0 });
    }
  };

  render() {
    return (
      <div>
        <Navbar
          rightClick={this.state.correctCount}
          bestClick={this.state.bestScore} />
        <Container>
          {this.state.images.map(element => {
            return <Card
              id={element.id}
              key={element.id}
              image={element.image}
              alt={element.alt}
              pushCard={this.pushCard}
              shuffle={this.shuffle} />
          })}
          <p className="credit">The images are from the amazing illustrator <a href="http://jerryliustudio.tumblr.com/" target="_blank" rel="noopener noreferrer">Jerry Liu</a>.</p>
        </Container>
      </div>
    );
  }
}

export default App;
