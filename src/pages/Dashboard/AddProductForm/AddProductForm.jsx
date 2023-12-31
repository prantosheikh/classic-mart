import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { CiImageOn } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";


const thumbsContainer = {
   display: "flex",
   flexDirection: "row",
   flexWrap: "wrap",
   marginTop: 16,
};

const thumb = {
   display: "inline-flex",
   borderRadius: 2,
   border: "1px solid #eaeaea",
   marginBottom: 8,
   marginRight: 8,
   width: 100,
   height: 100,
   padding: 1,
   boxSizing: "border-box",
};

const thumbInner = {
   display: "flex",
   minWidth: 0,
   overflow: "hidden",
};

const img = {
   display: "block",
   width: "500px",
   height: "100%",
};

const Img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
console.log(Img_hosting_token);
const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${Img_hosting_token}`;

const AddProductForm = () => {
   const [files, setFiles] = useState([]);
   const [filesTwo, setFilesTwo] = useState([]);
   const [filesThree, setFilesThree] = useState([]);

   const onSubmit = async (data) => {
      // Form Data
      const brand = data.brand.label;
      const category = data.category.label;
      const gender = data.gender.label;
      const size = data.size.label;
      const product = data.product;
      const newProduct = { brand, category, gender, size, product };









      // IMAGE HOSTING ONE
      const formData = new FormData();
      formData.append("image", files[0]);

      // IMAGE HOSTING TWO 
      const formDataTwo = new FormData();
      formDataTwo.append("imageTwo", filesTwo[0]);

      // IMAGE HOSTING THREE 
      const formDataThree = new FormData();
      formDataThree.append("imageThree", filesThree[0]);

      // Sending multiple images in a single request
      const combinedFormData = new FormData();
      combinedFormData.append("image", files[0]);
      combinedFormData.append("imageTwo", filesTwo[0]);
      combinedFormData.append("imageThree", filesThree[0]);

      // Sending combinedFormData to the server
      fetch(img_hosting_url, {
         method: "POST",
         body: combinedFormData,
      })
         .then((res) => res.json())
         .then((imageResponse) => console.log(imageResponse));
   };


   const optionsOne = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
   ];
   const optionsTwo = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
   ];
   const optionsThree = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
   ];

   const {
      register,
      handleSubmit,
      formState: { errors },
      control,
   } = useForm();

   const { getRootProps, getInputProps } = useDropzone({
      accept: {
         "image/*": [],
      },
      onDrop: (acceptedFiles) => {
         setFiles(
            acceptedFiles.map((file) =>
               Object.assign(file, {
                  preview: URL.createObjectURL(file),
               })
            )
         );
      },
   });
   const { getRootProps: getRootPropsTwo, getInputProps: getInputPropsTwo } =
      useDropzone({
         accept: {
            "image/*": [],
         },
         onDrop: (acceptedFiles) => {
            setFilesTwo(
               acceptedFiles.map((file) =>
                  Object.assign(file, {
                     preview: URL.createObjectURL(file),
                  })
               )
            );
         },
      });
   const {
      getRootProps: getRootPropsThree,
      getInputProps: getInputPropsThree,
   } = useDropzone({
      accept: {
         "image/*": [],
      },
      onDrop: (acceptedFiles) => {
         setFilesThree(
            acceptedFiles.map((file) =>
               Object.assign(file, {
                  preview: URL.createObjectURL(file),
               })
            )
         );
      },
   });
   const thumbs = files.map((file) => (
      <div style={thumb} key={file.name}>
         <div style={thumbInner}>
            <img
               className="w-full"
               src={file.preview}
               style={img}
               // Revoke data uri after image is loaded
               onLoad={() => {
                  URL.revokeObjectURL(file.preview);
               }}
            />
         </div>
      </div>
   ));
   const thumbsTwo = filesTwo.map((file) => (
      <div style={thumb} key={file.name}>
         <div style={thumbInner}>
            <img
               className="w-full"
               src={file.preview}
               style={img}
               // Revoke data uri after image is loaded
               onLoad={() => {
                  URL.revokeObjectURL(file.preview);
               }}
            />
         </div>
      </div>
   ));
   const thumbsThree = filesThree.map((file) => (
      <div style={thumb} key={file.name}>
         <div style={thumbInner}>
            <img
               className="w-full"
               src={file.preview}
               style={img}
               // Revoke data uri after image is loaded
               onLoad={() => {
                  URL.revokeObjectURL(file.preview);
               }}
            />
         </div>
      </div>
   ));

   useEffect(() => {
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
   }, []);

   return (
      <div className="w-full">
         <div>
            <div>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex justify-between items-start gap-4">
                     <div className=" w-[45%] p-4">
                        <div className="w-full">
                           <label className="label">
                              <span className="label-text text-gray-600  font-semibold ">
                                 Product Name{" "}
                              </span>
                           </label>
                           <input
                              className="py-2 ps-3 border  me-4 rounded w-full
        "
                              //   defaultValue="test"
                              placeholder="Class Name"
                              required
                              {...register("product", {
                                 required: true,
                              })}
                           />
                        </div>
                        {/* Category or Gender*/}
                        <div className="my-3">
                           <div className="flex justify-center gap-3">
                              <div className="w-[70%]">
                                 <label className="label">
                                    <span className="flex justify-center gap-2 items-center label-text text-gray-600  font-semibold ">
                                       Category{" "}
                                       <FaRegQuestionCircle className="text-gray-400" />
                                    </span>
                                 </label>
                                 <Controller
                                    name="category"
                                    control={control}
                                    className={"react-select"}
                                    defaultValue={null}
                                    render={({ field }) => (
                                       <Select
                                          {...field}
                                          options={optionsOne}
                                       />
                                    )}
                                 />
                              </div>

                              <div className="w-[30%]">
                                 <label className="label">
                                    <span className="label-text text-gray-600 font-semibold ">
                                       Gender{" "}
                                    </span>
                                 </label>
                                 <Controller
                                    name="gender"
                                    control={control}
                                    defaultValue={null}
                                    render={({ field }) => (
                                       <Select
                                          {...field}
                                          options={optionsTwo}
                                          isSearchable
                                       />
                                    )}
                                 />
                              </div>
                           </div>
                        </div>
                        {/* Brand Input */}
                        <div className="my-3">
                           <label className="label">
                              <span className="label-text text-gray-600  font-semibold ">
                                 Brand
                              </span>
                           </label>
                           <div className="">
                              <Controller
                                 name="brand"
                                 control={control}
                                 defaultValue={null}
                                 render={({ field }) => (
                                    <Select
                                       {...field}
                                       options={optionsThree}
                                    />
                                 )}
                              />
                           </div>
                        </div>
                        {/* <input
									type="file"
									accept="image/*"
									{...register("image", {
										required: "This field is required",
									})}
								/>
								{errors.image && (
									<span>{errors.image.message}</span>
								)} */}

                        {/* Drciptions */}
                        <div className=" w-full">
                           <label className="label">
                              <span className="flex justify-center gap-2 items-center label-text text-gray-600  font-semibold ">
                                 Description
                                 <FaRegQuestionCircle className="text-gray-400" />
                              </span>
                           </label>
                           <input
                              className="border w-full h-36 rounded text-start px-3"
                              placeholder="Description"
                              {...register("description", {
                                 required: true,
                              })}
                           />
                           {/* errors will return when field validation fails  */}
                           {errors.exampleRequired && (
                              <span>This field is required</span>
                           )}
                        </div>
                        <p className="text-[13px] mt-2">
                           Do not exceed 100 characters when entering
                           the product name.
                        </p>
                     </div>
                     <div className="w-[55%] p-4">
                        <span className="flex gap-2 items-center text-start text-gray-600  font-semibold ">
                           Product Image{" "}
                           <FaRegQuestionCircle className="text-gray-400" />
                        </span>
                        <div className="flex justify-between items-center my-8">
                           {/* File One */}
                           <div className="flex justify-center items-center dotted-element w-40 h-40">
                              <section className="container  ">
                                 {files.length > 0 ? (
                                    <aside
                                       className="flex justify-center items-center"
                                       style={thumbsContainer}
                                    >
                                       {thumbs}
                                    </aside>
                                 ) : (
                                    <div
                                       {...getRootProps({
                                          className: "dropzone",
                                       })}
                                    >
                                       <input
                                          {...getInputProps()}
                                       />
                                       <div className="flex flex-col gap-4 justify-center items-center">
                                          <CiImageOn className="text-3xl" />
                                          <p className="text-[12px]">
                                             Drop your image
                                             here, or <br />
                                             select{" "}
                                             <span className="text-blue-800 cursor-pointer">
                                                click to browse
                                             </span>
                                          </p>
                                       </div>
                                    </div>
                                 )}
                              </section>
                           </div>
                           {/* File Two */}
                           <div className="flex justify-center items-center text-center dotted-element w-45 h-40 p-4">
                              {filesTwo.length > 0 ? (
                                 (console.log(
                                    "aaaa",
                                    filesTwo[0].path
                                 ),
                                    (
                                       // Render thumbnails if there are uploaded files
                                       <aside
                                          className="flex justify-center items-center"
                                          style={thumbsContainer}
                                       >
                                          {thumbsTwo}
                                       </aside>
                                    ))
                              ) : (
                                 // Render dropzone if no files are uploaded
                                 <div
                                    {...getRootPropsTwo({
                                       className: "dropzone",
                                    })}
                                 >
                                    <input
                                       {...getInputPropsTwo()}
                                    />
                                    <div className="flex flex-col gap-4 justify-center items-center">
                                       <CiImageOn className="text-3xl" />
                                       <p className="text-[12px]">
                                          Drop your image here, or{" "}
                                          <br />
                                          select{" "}
                                          <span className="text-blue-800 cursor-pointer">
                                             click to browse
                                          </span>
                                       </p>
                                    </div>
                                 </div>
                              )}
                           </div>

                           {/* File Three */}
                           <div className="flex justify-center items-center dotted-element p-2 w-30 h-40">
                              <section className="container  ">
                                 {filesThree.length > 0 ? (
                                    <aside
                                       className="flex justify-center items-center"
                                       style={thumbsContainer}
                                    >
                                       {thumbsThree}
                                    </aside>
                                 ) : (
                                    <div
                                       {...getRootPropsThree({
                                          className: "dropzone",
                                       })}
                                    >
                                       <input
                                          {...getInputPropsThree()}
                                       />
                                       <div className="flex flex-col gap-4 justify-center items-center">
                                          <CiImageOn className="text-3xl" />
                                          <p className="text-[10px]">
                                             Drop your image
                                             here, or <br />
                                             select{" "}
                                             <span className="text-blue-800 cursor-pointer">
                                                click to browse
                                             </span>
                                          </p>
                                       </div>
                                    </div>
                                 )}
                              </section>
                           </div>
                        </div>

                        {/* intaction paragraph */}
                        <div className="my-3 text-gray-500">
                           <p>
                              You need to add at least 4 images. Pay
                              attention to the quality of the pictures
                              you add, comply with the background
                              color standards. Pictures must be in
                              certain dimensions. Notice that the
                              product shows all the details.
                           </p>
                        </div>

                        {/* Add size or Add Date*/}
                        <div className="my-3">
                           <div className="flex justify-center gap-3">
                              <div className="w-[50%]">
                                 <label className="label">
                                    <span className="flex justify-center gap-2 items-center label-text text-gray-600  font-semibold ">
                                       Add Size{" "}
                                       <FaRegQuestionCircle className="text-gray-400" />
                                    </span>
                                 </label>
                                 <Controller
                                    {...register("size", {
                                       required: true,
                                    })}
                                    control={control}
                                    className={"react-select"}
                                    defaultValue={null}
                                    render={({ field }) => (
                                       <Select
                                          {...field}
                                          options={optionsOne}
                                       />
                                    )}
                                 />
                              </div>

                              <div className="w-[50%]">
                                 <label className="label">
                                    <span className="label-text text-gray-600 font-semibold ">
                                       Product Date{" "}
                                    </span>
                                 </label>
                                 <Controller
                                    name="gender"
                                    control={control}
                                    defaultValue={null}
                                    render={({ field }) => (
                                       <Select
                                          {...field}
                                          options={optionsTwo}
                                          isSearchable
                                       />
                                    )}
                                 />
                              </div>
                           </div>
                        </div>

                        <br />
                        <div className="my-4 flex gap-5">
                           <button className="py-2 px-10 rounded text-white font-semibold bg-[#6B7CFF]">
                              Add Proudct
                           </button>
                           <button className="py-2 px-10 rounded text-black font-semibold border border-[#6B7CFF]">
                              Save Proudct
                           </button>
                           <button className="py-2 px-2 rounded text-black font-semibold border">
                              Schedule
                           </button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddProductForm;
