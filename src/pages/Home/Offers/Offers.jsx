import React, { useEffect, useState } from 'react';
import Container from '../../../components/Shared/Container/Container';
import { Link, useParams } from 'react-router-dom';

const Offers = () => {

   const { id } = useParams();
   console.log(id);

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
               <div className='group overflow-hidden'>
                  <Link to={`/collections/${offer.title}`} className='cursor-pointer'>
                     <img  className="object-cover w-full h-full scale-100 group-hover:scale-110 duration-500" key={offer._id} src={offer.image} alt="" />
                     <h2 className='mt-4 text-base font-semibold text-gray-600 text-center'>{offer.title}</h2>
                  </Link>
               </div>

            ))}
         </div>

      </Container>
   );
};

export default Offers;
