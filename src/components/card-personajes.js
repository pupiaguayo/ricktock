import React from "react";
import "../styles/card-episodes.css";
class CardPersonajes extends React.Component {
  render() {
    return (
      <div className="col-4 col-lg-4">
        <div className="tarjeta">
          <img src={this.props.img} alt="" className="imgCard" />
          <p className="titleCard">Nombre: {this.props.nombrePersonaje}</p>
          <p className="titleCard">Especie: {this.props.especie}</p>
          <p className="titleCard">Estado: {this.props.estado}</p>
        </div>
      </div>
    );
  }
}
export default CardPersonajes;
