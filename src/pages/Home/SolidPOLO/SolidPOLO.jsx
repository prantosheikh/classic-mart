import React, { useEffect, useState } from 'react';
import Container from '../../../components/Shared/Container/Container';
import { Link } from 'react-router-dom';

const SolidPOLO = () => {
   const [solidPolos, setSolidPolo] = useState(null)
   console.log(solidPolos)

   useEffect(() => {
      fetch('http://localhost:3000/solid_polo')
         .then(res => res.json())
         .then(data => setSolidPolo(data))
   }, [])
   return (
      <Container>
         <h2 className='text-2xl py-6'>Solid POLO</h2>
         <div >
            <div className='grid grid-cols-4 gap-10'>
               {solidPolos?.map(solidPolo =>
               (<div className=' '>
                  <div className="mt-6 w-full ">
                     <figure>
                        <img src={solidPolo?.product?.img} alt="Shoes" />
                     </figure>
                     <div className="text-center mt-4">
                        <div className='my-6'>
                           <h2 className="">{solidPolo?.product?.title}</h2>
                           <p>Tk: {solidPolo?.product?.price}</p>
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

export default SolidPOLO;