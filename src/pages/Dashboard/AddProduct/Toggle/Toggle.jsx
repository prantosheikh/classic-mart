import React, { useEffect, useState } from "react";
import { VscCheck } from "react-icons/vsc";
import { Link } from "react-router-dom";
// import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

// import FaqSection from "./FaqSection";
// import Price from "./Price";
import Container from "../../../../components/Shared/Container/Container";
import AddProductForm from "../../AddProductForm/AddProductForm";

function PricingToggle() {
   const [isMonthly, setIsMonthly] = useState(true);
   const [pricingData, setPricingData] = useState([]);
   // console.log(pricingData);
   const [monthly, setMonthly] = useState([]);
   const [yearly, setYearly] = useState([]);

   const togglePricing = () => {
      setIsMonthly(!isMonthly);
   };

   // const [axiosSecure] = useAxiosSecure();

   // get monthly data
   // console.log(import.meta.env.VITE_API_URL);
   // get yearly data

   //   useEffect(() => {
   //     const fetchData = async () => {
   //       try {
   //         const response = await axiosSecure.get(
   //           isMonthly
   //             ? `${import.meta.env.VITE_API_URL}/monthly`
   //             : `${import.meta.env.VITE_API_URL}/yearly`
   //         );
   //         const data = response.data;
   //         setPricingData(data);
   //       } catch (error) {
   //         console.error("An error occurred:", error);
   //       }
   //     };

   //     fetchData();
   //   }, [axiosSecure, isMonthly]);

   return (
      <Container>
         <div className="mt-[40px]">
            <div className="flex justify-center w-10/12 lg:w-[30%]  rounded  lg:gap-4 py-2  bg-[#E0E4FC]">
               <button
                  className={`${isMonthly ? "bg-[#6B7CFF] text-white" : ""
                     } px-4 py-2 rounded`}
                  onClick={() => {
                     setIsMonthly(true);
                     // handleMonthly(); // Call the handleMonthly function
                  }}
               >
                  Overviews
               </button>
               <button
                  className={`${!isMonthly ? "bg-[#6B7CFF] text-white" : ""
                     } px-4 py-2 rounded`}
                  onClick={() => setIsMonthly(false)}
               >
                  Add Product
               </button>
            </div>

            <div className=" w-full mt-10">
               {isMonthly ? (
                  <div className="p-6 border h-screen">
                     <h1>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Doloribus cumque aliquid eum
                        ut numquam expedita ea quidem veniam alias iste!
                     </h1>
                  </div>
               ) : (
                  <div className="p-6 border">
                     <AddProductForm />
                  </div>
               )}
            </div>
         </div>
      </Container>
   );
}

export default PricingToggle;
