import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Container from '../../components/Shared/Container/Container';

const InsideDhaka = () => {
   const [dhaka, setDhaka] = useState(null)
   console.log(dhaka)

   useEffect(() => {
      fetch('http://localhost:3000/dhaka')
         .then(res => res.json())
         .then(data => setDhaka(data))
   }, [])
   return (
      <Container>
         <h2 className='text-2xl py-6'>Upto 50% OFF! (Order over TK 1000 to get FREE Shipping inside Dhaka)</h2>
         <div >
            <div className='grid grid-cols-4 gap-10'>
               {dhaka?.map(dhaka =>
               (<div className=' '>
                  <div className="mt-6 w-full ">
                     <figure>
                        <img src={dhaka?.product?.img} alt="Shoes" />
                     </figure>
                     <div className="text-center mt-4">
                        <div className='my-6'>
                           <h2 className="">{dhaka?.product?.title}</h2>
                           <p>Tk: {dhaka?.product?.price}</p>
                        </div>
                        <div className="card-actions justify-end">
                           <button className="w-full border py-2">Buy Now</button>
                           <button className="w-full text-green-500 font-semibold border border-green-300 hover:bg-gray-50 py-3 my-4">ADD TO CART</button>
                        </div>
                     </div>
                  </div>
               </div>))}
            </div>
         </div>


      </Container>
   );
};

export default InsideDhaka;