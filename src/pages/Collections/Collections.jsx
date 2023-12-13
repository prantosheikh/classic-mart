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
         </div>
         <div>
            {offers?.map(offer => <div>
               <div>
                  <h1>Offer</h1>
               </div>
            </div>)}
         </div>
      </Container>
   );
};

export default Collections;