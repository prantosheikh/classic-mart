import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Container from '../../../components/Shared/Container/Container';
import { Link } from 'react-router-dom';

const Summer = () => {

   const [summers, setSummer] = useState(null)
   console.log(summers)

   useEffect(() => {
      fetch('http://localhost:3000/summer')
         .then(res => res.json())
         .then(data => setSummer(data))
   }, [])


   return (
      <Container>
         <h2 className='text-2xl my-6'>Offers</h2>
         <div className='grid grid-cols-3 gap-8'>
            {summers?.map(summer => (
               console.log(summer),

               <div className='group overflow-hidden'>
                  <Link to={`/collections/${summer.title}`} className='cursor-pointer'>
                     <img className="object-cover w-full scale-100 group-hover:scale-105 duration-500" key={summer._id} src={summer.image} alt="" />
                     <h2 className='mt-4 text-base font-semibold text-gray-600 text-center'>{summer.title}</h2>
                  </Link>
               </div>

            ))}
         </div>

      </Container>
   );
};

export default Summer;