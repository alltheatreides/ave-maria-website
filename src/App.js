// import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import HeroFeature from './components/HeroFeature';
// import HeroLanding from './components/HeroLanding';

import { useState } from 'react';
import { useEffect } from 'react';

import background from './ressources/img/load.png';
import feature1 from './ressources/img/joan-francesc-oliveras-pallerols-basil-ii.jpg';


function App() {

  // Defines a variable (here name) and a handler (setname) to enable a variable to be dynamically rendered in the dom based off its JS changes
  const [name, setName] = useState('mario');

  // 
  const handleClick = () => {
    setName('luigi');
  };

  // useEffect(() => {
  //   document.title = "AVE MARIA CK3 MOD";
  // }, []);

  return (
    <div className="App">
      {/* SHould show below the dynamic implementation of the name variable */}
      {/* <h1>{name}</h1> */}

      {/* <Navbar /> */}

      {/* <Home></Home> */}

      <Home></Home>
    </div>
  );
}

export default App;
