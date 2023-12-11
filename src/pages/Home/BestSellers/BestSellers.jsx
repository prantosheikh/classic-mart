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
         <div>
            <h2>Our Best Sellers!</h2>
            <div>

            </div>
         </div>
      </Container>
   );
};

export default BestSellers;