import "tailwindcss/tailwind.css";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
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

   const productManagement = [
      {
         title: "Product Management",
         content: ["Product Edit", "Product View", "Product Details"],
      },
      // Add more sections as needed
   ];
   const landingPage = [
      {
         title: "Landing Page ",
         content: ["Landing Page List", "Add Landing Page "],
      },
      // Add more sections as needed
   ];
   const category = [
      {
         title: "Category",
         content: ["Category List", "Add Category"],
      },
      // Add more sections as needed
   ];
   const brand = [
      {
         title: "Brand",
         content: ["Brand List", "Add Brand"],
      },
      // Add more sections as needed
   ];
   const pages = [
      {
         title: "Pages",
         content: ["Page List", "Add Page"],
      },
      // Add more sections as needed
   ];
   const sectionsFour = [
      {
         title: "Brand",
         content: ["Brand List", "Add Brand"],
      },
      // Add more sections as needed
   ];


   const [activeIndex, setActiveIndex] = useState(null);

   const handleClick = (index) => {
      setActiveIndex((prevIndex) => (index === prevIndex ? null : index));
   };




   return (
      <div className="bg-gray-200  flex flex-col ">
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
               <ul className="menu p-4 w-80 h-screen bg-white text-base-content">
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
                                    onClick={() => handleClick(0)}
                                 >
                                    <div>{section.title}</div>
                                    <div>
                                       {activeIndex === 0 ? (
                                          <IoMdArrowDropup className="text-lg" />
                                       ) : (
                                          <IoMdArrowDropdown className="text-lg" />
                                       )}
                                    </div>
                                 </div>
                                 {activeIndex === index && (
                                    <div className="bg-white text-gray-800 flex items-center gap-4 px-4 w-4/6 mx-auto mt-2 rounded-md p-2 shadow-md">
                                       <MdManageHistory className="text-xl" />
                                       <Link
                                          to={section.content}
                                          className="text-blue-500 hover:underline"
                                       >
                                          {section.content}
                                       </Link>
                                    </div>
                                 )}
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="px-4">
                     <h3 className="text-lg mb-4">Dashboard</h3>
                     <div className="flex flex-col items-start w-full">
                        {isAdmin && (
                           <>
                              <div className="flex flex-col justify-between items-start">

                                 {productManagement.map((section, index) => (
                                    <div key={index} className="">
                                       <div
                                          className="flex justify-center gap-6 items-center cursor-pointer"
                                          onClick={() => handleClick(1)}
                                       >
                                          <div className="">{section.title}</div>
                                          <div>
                                             {activeIndex === 1 ? (
                                                <IoMdArrowDropup className="text-lg" />
                                             ) : (
                                                <IoMdArrowDropdown className="text-lg" />
                                             )}
                                          </div>
                                       </div>
                                       {activeIndex === 1 && (
                                          <div className=" text-gray-800 mt-2 p-2">
                                             {section.content.map((sections, idx) => (
                                                <div
                                                   key={idx}
                                                   className="flex flex-col items-start "
                                                >
                                                   <Link
                                                      to={sections}
                                                      className="hover:bg-gray-100 mb-1 py-2 px-5 rounded text-gray-900 "
                                                   >
                                                      {sections}
                                                   </Link>
                                                </div>
                                             ))}
                                          </div>
                                       )}
                                    </div>
                                 ))}

                              </div>

                              <div className="my-4">

                                 {landingPage.map((section, index) => (
                                    <div key={index} className="">
                                       <div
                                          className="flex justify-between gap-6 items-center cursor-pointer"
                                          onClick={() => handleClick(2)}
                                       >
                                          <div className="">{section.title}</div>
                                          <div>
                                             {activeIndex === 2 ? (
                                                <IoMdArrowDropup className="text-lg" />
                                             ) : (
                                                <IoMdArrowDropdown className="text-lg" />
                                             )}
                                          </div>
                                       </div>
                                       {activeIndex === 2 && (
                                          <div className=" text-gray-800 mt-2 p-2">
                                             {section.content.map((sections, idx) => (
                                                <div
                                                   key={idx}
                                                   className="flex flex-col items-start "
                                                >
                                                   <Link
                                                      to={sections}
                                                      className="hover:bg-gray-100 mb-1 py-2 px-5 rounded text-gray-900 "
                                                   >
                                                      {sections}
                                                   </Link>
                                                </div>
                                             ))}
                                          </div>
                                       )}
                                    </div>
                                 ))}

                              </div>
                              {/* Catogory  */}
                              <div className="">
                                 {category.map((section, index) => (
                                    <div key={index} className="">
                                       <div
                                          className="flex justify-between gap-6 items-center cursor-pointer"
                                          onClick={() => handleClick(3)}
                                       >
                                          <div className="">{section.title}</div>
                                          <div>
                                             {activeIndex === 3 ? (
                                                <IoMdArrowDropup className="text-lg" />
                                             ) : (
                                                <IoMdArrowDropdown className="text-lg" />
                                             )}
                                          </div>
                                       </div>
                                       {activeIndex === 3 && (
                                          <div className=" text-gray-800 mt-2 p-2">
                                             {section.content.map((sections, idx) => (
                                                <div
                                                   key={idx}
                                                   className="flex flex-col items-start "
                                                >
                                                   <Link
                                                      to={sections}
                                                      className="hover:bg-gray-100 mb-1 py-2 px-5 rounded text-gray-900 "
                                                   >
                                                      {sections}
                                                   </Link>
                                                </div>
                                             ))}
                                          </div>
                                       )}
                                    </div>
                                 ))}

                              </div>
                              {/* Brand  */}
                              <div className="my-4">
                                 {brand.map((section, index) => (
                                    <div key={index} className="">
                                       <div
                                          className="flex justify-between gap-6 items-center cursor-pointer"
                                          onClick={() => handleClick(4)}
                                       >
                                          <div className="">{section.title}</div>
                                          <div>
                                             {activeIndex === 4 ? (
                                                <IoMdArrowDropup className="text-lg" />
                                             ) : (
                                                <IoMdArrowDropdown className="text-lg" />
                                             )}
                                          </div>
                                       </div>
                                       {activeIndex === 4 && (
                                          <div className=" text-gray-800 mt-2 p-2">
                                             {section.content.map((sections, idx) => (
                                                <div
                                                   key={idx}
                                                   className="flex flex-col items-start "
                                                >
                                                   <Link
                                                      to={sections}
                                                      className="hover:bg-gray-100 mb-1 py-2 px-5 rounded text-gray-900 "
                                                   >
                                                      {sections}
                                                   </Link>
                                                </div>
                                             ))}
                                          </div>
                                       )}
                                    </div>
                                 ))}

                              </div>
                              <div className="my-4">
                                 {pages.map((section, index) => (
                                    <div key={index} className="">
                                       <div
                                          className="flex justify-between gap-6 items-center cursor-pointer"
                                          onClick={() => handleClick(5)}
                                       >
                                          <div className="">{section.title}</div>
                                          <div>
                                             {activeIndex === 5 ? (
                                                <IoMdArrowDropup className="text-lg" />
                                             ) : (
                                                <IoMdArrowDropdown className="text-lg" />
                                             )}
                                          </div>
                                       </div>
                                       {activeIndex === 5 && (
                                          <div className=" text-gray-800 mt-2 p-2">
                                             {section.content.map((sections, idx) => (
                                                <div
                                                   key={idx}
                                                   className="flex flex-col items-start "
                                                >
                                                   <Link
                                                      to={sections}
                                                      className="hover:bg-gray-100 mb-1 py-2 px-5 rounded text-gray-900 "
                                                   >
                                                      {sections}
                                                   </Link>
                                                </div>
                                             ))}
                                          </div>
                                       )}
                                    </div>
                                 ))}

                              </div>
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




                     </div>
                  </div>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
