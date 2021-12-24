import { useState } from "react";
import logo from "../ressources/img/logo.png";
import heroImage from "../ressources/img/vierge au lys effet photoshop vanilla.png";

const HeroLanding = () => {
   return (
      <section className="landing test h-screen text-white">
         <header className="h-1/5 w-4/5 mx-auto py-5 flex justify-between items-center ">
            <a href="#" className="h-full"><img className="h-full" src={logo} alt="ave maria mod logo" /></a>
            {/* <img className="h-full" src={logo} alt="ave maria mod logo" /> */}
            <nav>
               <ul className="flex gap-12 text-xl">
                  <li><a href="#">Home</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2268393523">Download</a></li>
               </ul>
            </nav>
         </header>
         <div className="hero h-4/5 w-4/5 mx-auto flex justify-between items-center relative overflow-hidden">
            <div className="title flex flex-col gap-6 w-3/6">
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">AVE MARIA</h1>
               <p className="text-2xl md:text-3xl lg:text-4xl">A Very Extensive Modification <br></br>for Appropriate Realism and Improved Authenticity.</p>
               <div class="w-full flex justify-center md:justify-start">
                  <button className="px-8 py-4 bg-gold text-dark-grey font-bold mt-12 flex items-center space-x-3 rounded-lg">
                     <div>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" class="svg-inline--fa fa-download fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512">
                           <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                           </path>
                        </svg>
                     </div>
                     {/* <span></span> */}
                     <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2268393523">Download.</a>
                  </button>
               </div>
            </div>
            {/* <div className="w-3/6 max-h-full overflow-hidden"> 
               <img src={heroImage} alt="vierge au lys" className="max-h-full"/>
            </div> */}
            <img src={heroImage} alt="vierge au lys" className="w-3/6 lg:top-2.5 md:absolute md:mt-0 right-0 -z-0" />

         </div>
      </section>

   );
}

export default HeroLanding;
