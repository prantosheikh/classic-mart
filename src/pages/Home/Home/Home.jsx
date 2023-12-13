import React from 'react';
import Hero from '../Hero/Hero';
import BestSellers from '../BestSellers/BestSellers';
import Offers from '../Offers/Offers';
import Summer from '../Summer/Summer';
import BundleOffer from '../BundleOffer/BundleOffer';
import SolidPOLO from '../SolidPOLO/SolidPOLO';
import FullLeeves from '../FullLeeves/FullLeeves';
import InsideDhaka from '../../InsideDhaka/InsideDhaka';
import ContactUs from '../../ContactUs/ContactUs';


const Home = () => {
   return (

      <div className='mt-24'>
         <Hero />
         <Offers />
         <BestSellers />
         <Summer />
         <BundleOffer />
         <SolidPOLO />
         <FullLeeves />
         <InsideDhaka />
         <ContactUs/>
      </div>

   );
};

export default Home;