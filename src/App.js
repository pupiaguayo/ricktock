import React, { Component } from "react";
import "./App.css";
import PageHome from "./page-home";
import PageEpisodes from "./page-episodes";
import PagePersonajes from "./page-personajes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/episodios" component={PageEpisodes}></Route>
          <Route path="/personajes" component={PagePersonajes}></Route>
          <Route path="/" component={PageHome}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
