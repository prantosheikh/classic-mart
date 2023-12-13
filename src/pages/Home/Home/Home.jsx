import React from 'react';
import Hero from '../Hero/Hero';
import BestSellers from '../BestSellers/BestSellers';
import Offers from '../Offers/Offers';
import Summer from '../Summer/Summer';


const Home = () => {
   return (

      <div className='mt-24'>
         <Hero />
         <Offers />
         <BestSellers />
         <Summer />
      </div>

   );
};

export default Home;