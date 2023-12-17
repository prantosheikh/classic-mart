import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io"
import { MdManageHistory } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import {

   FaBookOpen,
   FaBookReader,
   FaRegBookmark,
   FaUsers,
   FaWallet,
} from "react-icons/fa";
import { FcBusinessContact, FcGallery, FcHome } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
   const isAdmin = true;
   const isInstructor = false;
   const isStudent = false;
   const sections = [
      {
         title: "Sales manager",
         content: "Manage product",
      },
      // Add more sections as needed
   ];

   const sectionsOne = [
      {
         title: "Product Management",
         content: ["Product View", "Product View", "Product Details"],
      },
      // Add more sections as needed
   ];




   const [activeIndex, setActiveIndex] = useState(null);

   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
   };
   const [activeIndexM, setActiveIndexM] = useState(null);

   const handleClickM = (index) => {
      setActiveIndexM(index === activeIndexM ? null : index);
   };

   return (
      <div className="bg-gray-200 h-screen flex">
         <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
               <Outlet></Outlet>
               <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary drawer-button lg:hidden"
               >
                  Open drawer
               </label>
            </div>
            <div className="drawer-side border">
               <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
               <ul className="menu p-4 w-80 h-full bg-white text-base-content">
                  <div className="text-center gap-6 mb-6 p-4 rounded-md border-b bg-gradient-to-r from-blue-400 to-purple-500 text-white">
                     <div className="avatar online">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                           <img
                              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                              className="w-full h-full object-cover"
                              alt="User Avatar"
                           />
                        </div>
                     </div>
                     <div className="">
                        <p className="text-lg font-bold">Mst. Shahida Begom</p>
                        <div className="mt-2">
                           {sections.map((section, index) => (
                              <div key={index} className="text-sm">
                                 <div
                                    className="flex justify-center gap-6 items-center cursor-pointer"
                                    onClick={() => handleClick(index)}
                                 >
                                    <div>{section.title}</div>
                                    <div>
                                       {activeIndex === index ? (
                                          <IoMdArrowDropup className="text-lg" />
                                       ) : (
                                          <IoMdArrowDropdown className="text-lg" />
                                       )}
                                    </div>
                                 </div>
                                 {activeIndex === index && (
                                    <div className="bg-white text-gray-800 flex items-center gap-4 px-4 w-4/6 mx-auto mt-2 rounded-md p-2 shadow-md">
                                       <MdManageHistory className="text-xl" />
                                       <Link to={section.content} className="text-blue-500 hover:underline">
                                          {section.content}
                                       </Link>
                                    </div>
                                 )}
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>


                  <div className="p-4">
                     <h3 className="text-lg mb-4">Dashboard</h3>
                     <ul>
                        {isAdmin && (
                           <>
                              <li>
                                 <div className="flex items-center">
                                    <div className="mt-2">
                                       {sectionsOne.map((section, index) => (
                                          <div key={index} className="text-sm">
                                             <div
                                                className="flex justify-center gap-6 items-center cursor-pointer"
                                                onClick={() => handleClickM(index)}
                                             >
                                                <div>{section.title}</div>
                                                <div>
                                                   {activeIndexM === index ? (
                                                      <IoMdArrowDropup className="text-lg" />
                                                   ) : (
                                                      <IoMdArrowDropdown className="text-lg" />
                                                   )}
                                                </div>
                                             </div>
                                             {activeIndexM === index && (
                                                <div className=" text-gray-800  mt-2 p-2">



                                                   {section.content.map(sections => <div className="flex flex-col items-start ms-4">
                                                      <Link to={sections} className="hover:bg-gray-100 my-1 py-2 px-5 rounded text-blue-900 ">

                                                         {sections}

                                                      </Link>
                                                   </div>)}





                                                </div>
                                             )}
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <NavLink
                                    to="/dashboard/manageclasses"
                                    className="flex items-center"
                                 >
                                    <FaBookReader className="text-xl text-blue-500 mr-2"></FaBookReader>
                                    Manage Product
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink
                                    to="/dashboard/allusers"
                                    className="flex items-center"
                                 >
                                    <FaUsers className="text-xl text-purple-500 mr-2"></FaUsers>
                                    Manage Users
                                 </NavLink>
                              </li>
                           </>
                        )}

                        {isInstructor && (
                           <>
                              <li>
                                 <NavLink to="/" className="flex items-center">
                                    <FcHome className="text-xl mr-2"></FcHome> Instructor Home
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink
                                    to="/dashboard/addclasses"
                                    className="flex items-center"
                                 >
                                    <BiAddToQueue className="text-xl text-purple-500 mr-2"></BiAddToQueue>
                                    Add Classes
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink
                                    to="/dashboard/myclasses"
                                    className="flex items-center"
                                 >
                                    <FcGallery className="text-xl text-purple-500 mr-2"></FcGallery>
                                    My Classes
                                 </NavLink>
                              </li>
                           </>
                        )}

                        {isStudent && (
                           <>
                              <li>
                                 <NavLink
                                    to="/dashboard/selecedclass"
                                    className="flex items-center"
                                 >
                                    <FaRegBookmark className="text-xl text-green-500 mr-2"></FaRegBookmark>
                                    Selected Classes
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink
                                    to="/dashboard/enrolled"
                                    className="flex items-center"
                                 >
                                    <FaBookOpen className="text-xl text-purple-600 mr-2"></FaBookOpen>
                                    Enrolled Classes
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink
                                    to="/dashboard/paymentmethod"
                                    className="flex items-center"
                                 >
                                    <FaWallet className="text-xl text-yellow-400 mr-2"></FaWallet>{" "}
                                    Payment
                                 </NavLink>
                              </li>
                           </>
                        )}
                     </ul>
                  </div>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
