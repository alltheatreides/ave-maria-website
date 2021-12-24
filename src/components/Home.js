import { useState } from "react";

import background from '../ressources/img/load.png';
import background2 from '../ressources/img/blank_black_template_logoless.png'

import HeroFeature from "./HeroFeature";
import HeroLanding from './HeroLanding';

const Home = () => {



   return (
      <main className="h-screen test">
         <HeroLanding />
         <HeroFeature />
      </main>
   );
}

export default Home;