import React, { Component } from "react";
import "../styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="containerInit">
        <div className="containerDescription" id="descripcion">
          <h1>Bienvenidos a RickTock</h1>
          <h4>Todo sobre Rick And Morty</h4>
          <h5>Acá podes encontrar tus personajes favoritos y todos los episodios.</h5>
          <p>ayyy</p>
        </div>
      </div>
    );
  }
}
export default Home;