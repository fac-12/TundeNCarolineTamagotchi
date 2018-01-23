import React from 'react';
import catty from "../../../public/cats.png"

 export class Card extends React.Component {

   state={
     health: 100,
   }


  render() {
    return(
      <div className="main-display">
        <img src= {catty}></img>
        <h1> great </h1>
        <span> {this.state.health} </span>
      </div>
    )
  }
 }
