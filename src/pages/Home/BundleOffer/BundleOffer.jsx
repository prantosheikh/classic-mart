import React, { useEffect, useState } from 'react';
import Container from '../../../components/Shared/Container/Container';
import { Link } from 'react-router-dom';

const BundleOffer = () => {

   const [bundle, setBundle] = useState(null)
   console.log(bundle)

   useEffect(() => {
      fetch('http://localhost:3000/bundle_offer')
         .then(res => res.json())
         .then(data => setBundle(data))
   }, [])


   return (
      <Container>
         <div className=''>
            {bundle?.map(bundle => (
               console.log(bundle),

               <div>
                  <Link to={`/collections/${bundle.title}`} className='cursor-pointer'>
                     <img className="scale-100 w-full group-hover:scale-105 duration-500" key={bundle._id} src={bundle.image} alt="" />
                  </Link>
               </div>
            ))}
         </div>
      </Container>
   );
};

export default BundleOffer;