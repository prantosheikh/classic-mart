import React, { useEffect, useState } from 'react';
import Container from '../../../components/Shared/Container/Container';

const Offers = () => {
   const [offers, setOffers] = useState(null);

   useEffect(() => {
      fetch('http://localhost:3000/offers')
         .then(res => res.json())
         .then(data => setOffers(data));
   }, []);

   return (
      <Container>
         <h2 className='text-2xl my-6'>Offers</h2>
         <div className='grid grid-cols-4 gap-6'>
            {offers?.map(offer => (
               console.log(offer),
               <div className='cursor-pointer'>
                  <img className='scale-100 hover:scale-105 duration-300' key={offer._id} src={offer.image} alt="" />
               </div>
            ))}
         </div>

      </Container>
   );
};

export default Offers;
