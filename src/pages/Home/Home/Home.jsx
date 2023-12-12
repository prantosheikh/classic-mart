import React from 'react';
import Hero from '../Hero/Hero';
import BestSellers from '../BestSellers/BestSellers';
import Offers from '../Offers/Offers';


const Home = () => {
   return (

      <div className='mt-24'>
         <Hero />
         <BestSellers />
         <Offers />
      </div>

   );
};

export default Home;