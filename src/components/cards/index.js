import React from "react";
import catty from "../../../public/cats.png";

export class Card extends React.Component {
  state = {
    health: 50
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState(props => {
        return { health: this.state.health - 1 };
      });
    }, 10000);
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

  // setBarWidth = {
  //   width: "this.state.health",
  //   height: "30px",
  //   backgroundColor: "green"
  // };

  render() {
    return (
      <div className="main-display">
        <img src={catty} />
        <h1> great </h1>
        <span> {this.state.health} </span>
        <div
          className="health_bar"
          style={{
            width: `${this.state.health}%`,
            height: "30px",
            backgroundColor: "green"
          }}
        />
        <div>
          <button onClick={this.increment}>click me</button>
        </div>
      </div>
    );
  }
}
