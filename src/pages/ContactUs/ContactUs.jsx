import React from 'react';
import Container from '../../components/Shared/Container/Container';

const ContactUs = () => {
   return (
      <Container>
         <div className='flex justify-between items-center bg-gray-100'>
            <div>
               <div className=' ms-36 flex flex-col justify-center items-center'>
                  <h2 className='text-2xl text-gray-800 my-2'>Our Office</h2>
                  <p className='text-base text-gray-600 font-semibold mb-3'>House - 69, Block - C, Road - 17, Konabari</p>
                  <button className='py-3 px-4 bg-green-600 rounded-md text-white font-semibold'>DIRECTION</button>
               </div>
            </div>
            <div>
               <img className='w-full ' src="https://i.ibb.co/jbg8YWq/contact-us-iphone-720x.jpg" alt="" />
            </div>
         </div>
      </Container>
   );
};

export default ContactUs;