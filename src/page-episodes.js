import React from "react";
import "./styles/page-episodes.css";
import Navbar from "./components/navbar.js";
import CardEpisodes from "./components/card-episodes";
class PageEpisodes extends React.Component {
  state = {
    episodios: [],
    episodiosRick: [],
  };
  componentDidMount() {
    this.fetchData(`https://rickandmortyapi.com/api/episode`);
  }
  fetchData = async (url) => {
    const arr = [];
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      episodios: data.results,
    });
    console.log(data);
    data.results.map(async (item) => {
      const resultados = await fetch(item.url);
      arr.push(await resultados.json());
      this.setState({
        episodiosRick: arr,
      });
      console.log(arr);
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
          {this.state.episodiosRick.map((item, i) => {
            return (
              <CardEpisodes
                img="https://images-na.ssl-images-amazon.com/images/I/51ROLN1X8YL._AC_.jpg"
                nombre={item.name}
                fecha={item.air_date}
                episodio={item.episode}
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default PageEpisodes;
