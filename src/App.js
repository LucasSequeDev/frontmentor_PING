import React, {Fragment} from 'react';
import './App.css';

// Assets
import dashboard from './assets/img/illustration-dashboard.png';
import logo from './assets/img/logo.svg';

// Components
import Suscribe from "./components/Suscribe";
import Social from "./components/Social"
import Footer from "./components/Footer"

function App() {
  return (
    <Fragment>
      <img src={logo} alt='Dashboard'/>
      <Suscribe />
      <img src={dashboard} alt='Dashboard'/>
      <Social />
      <Footer />
    </Fragment>
  );
}

export default App;
