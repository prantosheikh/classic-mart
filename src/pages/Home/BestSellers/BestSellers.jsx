import React, { useEffect, useState } from 'react';
import Container from '../../../components/Shared/Container/Container';
import { data } from 'autoprefixer';

const BestSellers = () => {

   const [BestSellers, setBestSellers] = useState(null)
   console.log(BestSellers)

   useEffect(() => {
      fetch('http://localhost:3000/best_seller')
         .then(res => res.json())
         .then(data => setBestSellers(data))

   }, [])


   return (

      <Container>
         <h2 className='text-2xl py-6'>Our Best Sellers!</h2>
         <div >
            <div className='grid grid-cols-3 gap-10'>
               {BestSellers?.map(BestSeller =>
               (<div className=' '>
                  <div className="mt-6 w-full ">
                     <figure>
                        <img src={BestSeller?.product?.img} alt="Shoes" />
                     </figure>
                     <div className="text-center mt-4">
                        <div className='my-6'>
                           <h2 className="text-base font-semibold text-gray-600">{BestSeller?.product?.title}</h2>
                           <p className='text-gray-800 mt-2'>Tk: {BestSeller?.product?.price}</p>
                        </div>
                        <div className="card-actions justify-end">
                           <button className="w-full border py-2">Buy Now</button>
                           <button className="w-full text-green-500 font-semibold border border-green-300 hover:bg-gray-50 py-4 my-4">ADD TO CART</button>
                        </div>
                     </div>
                  </div>
               </div>))}
            </div>
         </div>


      </Container>

   );
};

export default BestSellers;