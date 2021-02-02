import React from "react";
import "./styles/page-episodes.css";
import Navbar from "./components/navbar.js";
import CardPersonajes from "./components/card-personajes";
class PagePersonajes extends React.Component {
  state = {
    personajes: [],
    personajesSerie: [],
  };
  componentDidMount() {
    this.fetchData(`https://rickandmortyapi.com/api/character`);
  }
  fetchData = async (url) => {
    const arrPersonajes = [];
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      personajes: data.results,
    });
    console.log(data);
    data.results.map(async (item) => {
      const resultados = await fetch(item.url);
      arrPersonajes.push(await resultados.json());
      this.setState({
        personajesSerie: arrPersonajes,
      });
      console.log(arrPersonajes);
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
          {this.state.personajesSerie.map((item, i) => {
            return (
              <CardPersonajes
                img={item.image}
                nombrePersonaje={item.name}
                especie={item.species}
                estado={item.status}
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default PagePersonajes;
