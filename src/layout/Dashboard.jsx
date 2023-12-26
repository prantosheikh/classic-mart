import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

import { IoMdArrowDropdown } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";

const Dashboard = () => {
	const [isActive, setActive] = useState("false");

	// Sidebar Responsive Handler
	const handleToggle = () => {
		setActive(!isActive);
	};

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
		<>
			{/* Small Screen Navbar */}
			<div className="bg-[#ffffff]  text-gray-800 flex justify-between items-center  lg:justify-around md:hidden">
				<Link
					to="/"
					className="ms-4 font-semibold text-gray-500 border border-[#b0ffef] p-1 border-x-0 rounded-lg text-xl"
				>
					Sheib Ali
				</Link>
				<button
					onClick={handleToggle}
					className="mobile-menu-button p-4  focus:outline-none focus:bg-[#ffffff] "
				>
					{!isActive ? (
						<MdClose className="h-5 w-5" />
					) : (
						<AiOutlineBars className="h-5 w-5" />
					)}
				</button>
			</div>

			<div className="flex justify-around bg-white ">
				<div className="lg:w-[200px] ">
					<div
						className={`z-10 bg-white border md:fixed  flex flex-col justify-between overflow-x-hidden  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
							isActive && "-translate-x-full"
						}  md:translate-x-0  transition duration-200 ease-in-out`}
					>
						<div className="">
							{/* Branding & Profile Info */}
							<div className="menu lg:bg-hidding items-center text-base-content">
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
										<p className="text-lg font-bold">
											Mst. Shahida Begom
										</p>
										<div className="mt-2">
											{sections.map((section, index) => (
												<div
													key={index}
													className="text-sm"
												>
													<div
														className="flex justify-center gap-6 items-center cursor-pointer"
														onClick={() =>
															handleClick(0)
														}
													>
														<div>
															{section.title}
														</div>
														<div>
															{activeIndex ===
															0 ? (
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
																to={
																	section.content
																}
																className="text-blue-500 hover:underline"
															>
																{
																	section.content
																}
															</Link>
														</div>
													)}
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="mt-4">
									<h3 className="text-lg text-start mb-4">
										Dashboard
									</h3>
									{isAdmin && (
										<div className="my-4">
											{productManagement.map(
												(section, index) => (
													<div
														key={index}
														className=""
													>
														<div
															onClick={() =>
																handleClick(1)
															}
															className="flex justify-between gap-6 items-center cursor-pointer"
														>
															<div className="flex justify-between gap-12 items-center cursor-pointer">
																<div className="">
																	{
																		section.title
																	}
																</div>
																<div>
																	{activeIndex ===
																	1 ? (
																		<IoMdArrowDropup className="text-lg" />
																	) : (
																		<IoMdArrowDropdown className="text-lg" />
																	)}
																</div>
															</div>
														</div>
														{activeIndex === 1 && (
															<div>
																{section.content.map(
																	(
																		sections,
																		idx
																	) => (
																		<div
																			key={
																				idx
																			}
																			className="flex flex-col items-start "
																		>
																			<Link
																				to={
																					sections
																				}
																				className="hover:bg-gray-100 mb-1 py-2 px-5 rounded text-gray-900 "
																			>
																				{
																					sections
																				}
																			</Link>
																		</div>
																	)
																)}
															</div>
														)}
													</div>
												)
											)}

											<div className="my-4">
												{category.map(
													(section, index) => (
														<div
															key={index}
															className=""
														>
															<div
																className="flex justify-between gap-6 items-center cursor-pointer"
																onClick={() =>
																	handleClick(
																		3
																	)
																}
															>
																<div className="">
																	{
																		section.title
																	}
																</div>
																<div>
																	{activeIndex ===
																	3 ? (
																		<IoMdArrowDropup className="text-lg" />
																	) : (
																		<IoMdArrowDropdown className="text-lg" />
																	)}
																</div>
															</div>
															{activeIndex ===
																3 && (
																<div className=" text-gray-800 mt-2 p-2">
																	{section.content.map(
																		(
																			sections,
																			idx
																		) => (
																			<div
																				key={
																					idx
																				}
																				className="flex flex-col items-start "
																			>
																				<Link
																					to={
																						sections
																					}
																					className="hover:bg-gray-100 mb-1 py-2 px-5 rounded text-gray-900 "
																				>
																					{
																						sections
																					}
																				</Link>
																			</div>
																		)
																	)}
																</div>
															)}
														</div>
													)
												)}
											</div>
											<div className="my-4">
												{landingPage.map(
													(section, index) => (
														<div
															key={index}
															className=""
														>
															<div
																onClick={() =>
																	handleClick(
																		2
																	)
																}
															>
																<div className="flex justify-between gap-24 items-center cursor-pointer">
																	<div className="">
																		<p>
																			{
																				section.title
																			}
																		</p>
																	</div>
																	<div>
																		{activeIndex ===
																		2 ? (
																			<IoMdArrowDropup className="text-lg" />
																		) : (
																			<IoMdArrowDropdown className="text-lg" />
																		)}
																	</div>
																</div>
															</div>
															{activeIndex ===
																2 && (
																<div className=" text-gray-800 mt-2 p-2">
																	{section.content.map(
																		(
																			sections,
																			idx
																		) => (
																			<div
																				key={
																					idx
																				}
																				className="flex flex-col items-start "
																			>
																				<Link
																					to={
																						sections
																					}
																					className="hover:bg-gray-100 mb-1 py-2 px-5 rounded text-gray-900 "
																				>
																					{
																						sections
																					}
																				</Link>
																			</div>
																		)
																	)}
																</div>
															)}
														</div>
													)
												)}
											</div>
											<div className="my-4">
												{brand.map((section, index) => (
													<div
														key={index}
														className=""
													>
														<div
															className="flex justify-between gap-6 items-center cursor-pointer"
															onClick={() =>
																handleClick(4)
															}
														>
															<div className="">
																{section.title}
															</div>
															<div>
																{activeIndex ===
																4 ? (
																	<IoMdArrowDropup className="text-lg" />
																) : (
																	<IoMdArrowDropdown className="text-lg" />
																)}
															</div>
														</div>
														{activeIndex === 4 && (
															<div className=" text-gray-800 mt-2 p-2">
																{section.content.map(
																	(
																		sections,
																		idx
																	) => (
																		<div
																			key={
																				idx
																			}
																			className="flex flex-col items-start "
																		>
																			<Link
																				to={
																					sections
																				}
																				className="hover:bg-gray-100 mb-1 py-2 px-5 rounded text-gray-900 "
																			>
																				{
																					sections
																				}
																			</Link>
																		</div>
																	)
																)}
															</div>
														)}
													</div>
												))}
											</div>
											<div className="my-4">
												{pages.map((section, index) => (
													<div
														key={index}
														className=""
													>
														<div
															className="flex justify-between gap-6 items-center cursor-pointer"
															onClick={() =>
																handleClick(5)
															}
														>
															<div className="">
																{section.title}
															</div>
															<div>
																{activeIndex ===
																5 ? (
																	<IoMdArrowDropup className="text-lg" />
																) : (
																	<IoMdArrowDropdown className="text-lg" />
																)}
															</div>
														</div>
														{activeIndex === 5 && (
															<div className=" text-gray-800 mt-2 p-2">
																{section.content.map(
																	(
																		sections,
																		idx
																	) => (
																		<div
																			key={
																				idx
																			}
																			className="flex flex-col items-start "
																		>
																			<Link
																				to={
																					sections
																				}
																				className="hover:bg-gray-100 mb-1 py-2 px-5 rounded text-gray-900 "
																			>
																				{
																					sections
																				}
																			</Link>
																		</div>
																	)
																)}
															</div>
														)}
													</div>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:w-4/5">
					<Outlet></Outlet>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

// className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
//   isActive && "-translate-x-full"
// }  md:translate-x-0  transition duration-200 ease-in-out`}
// >
