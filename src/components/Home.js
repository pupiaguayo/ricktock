import React, { Component } from "react";
import "../styles/Home.css";
class Home extends Component {
  render() {
    return (
      <div className="containerInit">
        <div className="containerDescription" id="descripcion">
          <h1>Bienvenidos a RickTock</h1>
          <h4>Todo sobre Rick And Morty</h4>
        </div>
        <p>Informate sobre tu serie preferida</p>
      </div>
    );
  }
}
export default Home;
