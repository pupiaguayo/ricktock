import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import Home from "./components/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
class PageHome extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
      </React.Fragment>
    );
  }
}
export default PageHome;
