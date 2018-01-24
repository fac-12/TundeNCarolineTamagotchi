import React from "react";
import catty from "../../../public/cats.png";
import hungryGif from "../../../public/hungry.gif";
import pizza from "../../../public/pizza.gif";
import mountain from "../../../public/mountain.gif";

export class Card extends React.Component {
  state = {
    health: 100,
    barColor: "green"
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState(props => {
        if (this.state.health > 0) {
          return { health: this.state.health - 1 };
        }
      });
    }, 500);
  };

  increment = () => {
    this.setState(props => {
      return {
        health:
          this.state.health >= 80
            ? (this.state.health = 100)
            : this.state.health + 20
      };
    });
  };

  render() {
    return (
      <div className="main-display">
        <img src={hungryGif} />
        <h1>Give Pusheen Some Treats!</h1>
        <span> {this.state.health} snacks </span>
        <div
          className="health_bar"
          style={{
            width: `${this.state.health}%`,
            height: "30px",
            backgroundColor: `${this.state.health > 50 ? "green" : "red"}`
          }}
        />
        <div>
          <button onClick={this.increment}>Feed Me!</button>
        </div>
      </div>
    );
  }
}
