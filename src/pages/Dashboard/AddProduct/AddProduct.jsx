import { BsThreeDots } from "react-icons/bs";
import Container from "../../../components/Shared/Container/Container";
import { FaRegQuestionCircle } from "react-icons/fa";
import Test from "../../Test.jsx";
import AddProductForm from "../AddProductForm/AddProductForm.jsx";
import Toggle from "./Toggle/Toggle.jsx";
const AddClasses = () => {
   return (
      <Container>
         <div className="w-full">
            <div className="flex justify-between items-start">
               <div className="w-[65%]">
                  <div className="flex items-center gap-2">
                     <h2 className="text-2xl font-semibold">
                        Add Product
                     </h2>
                     <span>
                        <FaRegQuestionCircle className="text-gray-500" />
                     </span>
                  </div>
                  <p className="mt-6 text-gray-600">
                     Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Iure nemo quasi doloremque earum, fugit
                     commodi magnam maiores dolore distinctio quis?
                  </p>
               </div>
               <div className="w-[35%] flex justify-center items-center gap-2">
                  <button className="rounded-sm py-1 px-3 border hover:border-[#030857]">
                     Open Documentation{" "}
                  </button>
                  <button className="rounded-sm py-1 px-3 border hover:border-[#030857]">
                     Setup Default
                  </button>
                  <button className="rounded-sm  py-1 px-3 border hover:border-[#030857]">
                     <BsThreeDots className="text-xl" />
                  </button>
               </div>
            </div>
         </div>
         <Toggle />
      </Container>
   );
};

export default AddClasses;
