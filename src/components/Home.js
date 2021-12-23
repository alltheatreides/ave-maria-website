import { useState } from "react";

import background from '../ressources/img/load.png';
import background2 from '../ressources/img/blank_black_template_logoless.png'

import HeroFeature from "./HeroFeature";
import HeroLanding from './HeroLanding';

const Home = () => {



   return (
      <main className="h-screen test" 
         // style={{ backgroundImage: {background}}}
      >
         {/* <img src={require('../ressources/img/blank_black_template_logoless.png')} alt="ave-maria-loading-screen" className="absolute inset-0 -z-50 min-h-full h-full" /> */}

         <HeroLanding />
         {/* <section className="test"> */}
         {/* </section> */}

         <HeroFeature />
         {/* <section className="test">
         </section> */}

      </main>
   );
}

export default Home;