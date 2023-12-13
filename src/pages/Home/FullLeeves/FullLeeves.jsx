import React, { useEffect, useState } from 'react';
import Container from '../../../components/Shared/Container/Container';
import { Link } from 'react-router-dom';

const FullLeeves = () => {
   const [leeves, setLeeves] = useState(null)
   console.log(leeves)

   useEffect(() => {
      fetch('http://localhost:3000/full_leeves')
         .then(res => res.json())
         .then(data => setLeeves(data))
   }, [])
   return (
      <Container>
         <div className=''>
            {leeves?.map(leeve => (
               console.log(leeve),

               <div>
                  <Link to={`/collections/${leeve.title}`} className='cursor-pointer'>
                     <img className="scale-100 w-full group-hover:scale-105 duration-500" key={leeve._id} src={leeve.image} alt="" />
                  </Link>
               </div>

            ))}
         </div>
      </Container>
   );
};

export default FullLeeves;