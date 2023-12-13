import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../components/Shared/Container/Container';

const Collections = () => {

   const { id } = useParams()
   console.log(id)

   const [offers, setOffer] = useState(null)
   console.log(offers)

   useEffect(() => {
      fetch(`http://localhost:3000/collections/${id}`, {
         method: "GET",
         headers: { "content-type": "application/json" },
      })
         .then((res) => res.json())
         .then((data) => {
            setOffer(data);
         });
   }, [id]);


   return (
      <Container>
         <div className='pt-8'>
            <h3><Link to='/'>Home</Link> / {id}</h3>

            <div className='flex justify-between items-center my-12'>
               <h1 className='text-3xl'>{id}</h1>
               <div className='flex flex-col'>


                  <select className='border py-3 px-10 text-center' name="example" id="example">
                     <option value="option1">ALL</option>
                     <option value="option2">Option 2</option>
                     <option value="option3">Option 3</option>
                  </select>



                  <select className='border py-3 px-10 text-center' name="example" id="example">
                     <option value="option1">BEST SEELING</option>
                     <option value="option2">Option 2</option>
                     <option value="option3">Option 3</option>
                  </select>

               </div>
            </div>
         </div>
         <div>

            <div className='grid grid-cols-5 gap-10'>
               {offers?.map(offer =>
               (<div className=' '>
                  <div className="mt-6 w-full ">
                     <figure>
                        <img src={offer?.product?.img} alt="Shoes" />
                     </figure>
                     <div className="text-center mt-4">
                        <div className='my-6'>
                           <h2 className="">Shoes!</h2>
                           <p>If a dog chews shoes whose shoes does he choose?</p>
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

export default Collections;