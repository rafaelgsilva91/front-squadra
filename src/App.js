import React, { Component } from "react";
import "./App.css";
import Routes from "./config/router";
import { Router } from 'react-router-dom';
import Menu from "./layout/navbar";
import Footer from "./components/footer/footer";
import history from "./services/history";
import {GlobalContext, GlobalProvider} from './context/GlobalState';

function App() {
    return (

        <Router history={history} basename="/squadra/">
          <div className="App main-wrapper">
            <Menu />
            <Routes />
            <Footer />
          </div>
        </Router>

  );
}

export default App;

