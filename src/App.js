import React from 'react';
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
    <div className='container'>
      <img className='logo' src={logo} alt='Dashboard'/>
      <Suscribe />
      <img className='dashboard' src={dashboard} alt='Dashboard'/>
      <Social />
      <Footer />
    </div>
  );
}

export default App;
