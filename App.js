import React from "react";
import Header from "./components/Header";
import Shutters from "./components/shutters";
import Lights from './components/lights'
import Heaters from './components/heaters'
import Presets from "./presets";
import {Link, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './components/styles.css';


function App() {
  return (
    <div>
      <Header />
      <Router>
      <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <a class="navbar-brand" target="_blank">
            </a>
            <Link to="/" className="navbar-brand"> </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/ " className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/lights" className="nav-link">Lights</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/shutters" className="nav-link">Shutters</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/heaters" className="nav-link">Heaters</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/ " className="nav-link">Settings</Link>
                </li>
              </ul>
            </div>
      </Navbar>
      </div>

      <Route path="/shutters" exact component={Shutters} />
      <Route path="/lights" exact component={Lights} />      
      <Route path="/heaters" exact component={Heaters} />
      </Router>
      <br />
    </div>
  );
}

export default App;