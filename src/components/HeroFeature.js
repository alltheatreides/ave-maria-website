import { useState } from "react";

import featurePic1 from '../ressources/img/joan-francesc-oliveras-pallerols-basil-ii.jpg';
import featurePic2 from '../ressources/img/2019_CKS_17698_0010_000(gustav_bauernfeind_forecourt_of_the_umayyad_mosque_damascus012614)_5000.png';
import featurePic3 from '../ressources/img/philippe-auguste-visite-le-chantier-de-la-grosse-tour-tableau-du-xixe-siècle-de-jean-baptiste-mauzaisse-1784-1844-paris-musée-du-louvre-temple-de-paris.png';
import featurePic4 from '../ressources/img/Les_Très_Riches_Heures_du_duc_de_Berry_juillet.jpg';

const HeroFeature = (filepath, title) => {

   const [features, setFeatures] = useState([
      { id: 1, name: "Roman Empire", desc: "Overhaul of the Byzantine Empire government with new features better representing the political organization of 11th century Byzantium.", author: 'Scarecrow', pic: featurePic1 },
      { id: 2, name: "Islamic World", desc: "New governments and features for the Islamic world better representing the political organization of the time.", author: 'Atreides', pic: featurePic2 },
      { id: 3, name: "Feudal Government", desc: "Rework of staple feudal government of Western Europe with new and improved vanilla features.", author: 'Atreides', pic: featurePic3 },
      { id: 4, name: "Economy", desc: "Contextually relevant population system rooted in a simple agricultural economic model as well as a representation of the economic trends of the period.", author: 'WIP', pic: featurePic4 }
   ]);


   return (
      <article className="grid lg:grid-cols-4 md:grids-rows-4 md:grids-cols-1">

         {features.map(feature => (
               <section className="relative lg:h-screen grid place-items-center overflow-hidden border-b border-r border-slight-black group" key={feature.id}>

                  <img src={feature.pic} alt="" className="absolute inset-0 scale-200 blur-min opacity-0 group-hover:scale-175 group-hover:opacity-100 transition-all ease-out duration-2000 " />

                  <div className="flex flex-col gap-3 z-10 w-3/4 mx-auto text-left text-white justify-start lg:h-1/6">
                     <h3 className="text-4xl my-6">{feature.name}</h3>

                     <p>{feature.desc}</p>

                     <a href="#" className="my-8 opacity-0 group-hover:opacity-100 transition-all ease-out duration-2000 px-2 py-3 bg-slate-50 text-black font-bold self-start">Learn more</a>
                  </div>

            </section>
         ))}

      </article>
   );
}

export default HeroFeature;