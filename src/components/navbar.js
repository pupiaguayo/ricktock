import React from "react";
import "../styles/navbar.css";
import * as ReactBootStrap from "react-bootstrap";
import LogoRickAndMorty from "../LogoRickAndMorty.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-edit"
        id="home"
      >
        <ReactBootStrap.Navbar.Brand className="navbar-enlaces">
          <Link to="/">
            <img src={LogoRickAndMorty} alt="" />
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle-edit"
        />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto nav-edit">
            <ReactBootStrap.Nav.Link to="/" className="nav-links">
              <Link to="/">Home</Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="nav-links">
              <Link to="/episodios">Episodios </Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="nav-links">
              <Link to="/personajes">Personajes </Link>
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}
export default Navbar;
