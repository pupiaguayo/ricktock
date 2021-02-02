import React from "react";
import "../styles/card-episodes.css";
import { Link } from "react-router-dom";
class CardEpisodes extends React.Component {
  render() {
    return (
      <div className="col-4 col-lg-4">
        <div className="tarjeta">
          <img src={this.props.img} alt="" className="imgCard" />
          <p className="titleCard">Nombre: {this.props.nombre}</p>
          <p className="titleCard">Fecha: {this.props.fecha}</p>
          <p className="titleCard">Episodio: {this.props.episodio}</p>
        </div>
      </div>
    );
  }
}
export default CardEpisodes;
