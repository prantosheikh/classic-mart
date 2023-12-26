import React, { useState } from 'react';

const Test = () => {
   const [isMonthly, setIsMonthly] = useState(true);

   return (
      <div className='absolute w-full'>
         <div className='relative border-b w-[75%] top-[59px]'>

         </div>
         <div role="tablist" className="tabs tabs-bordered mt-6 ">
            <input type="radio" name="my_tabs_1" role="tab" className="tab text-base pb-8 " aria-label="Overview" />
            <div role="tabpanel" className="tab-content p-10">Tab content 1</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab  pb-8 text-base" aria-label="Add Product" checked />

            <div role="tabpanel" className="tab-content p-10">Tab content 2</div>


            <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
         </div>
      </div>
   );
};

export default Test;