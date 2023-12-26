import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { CiImageOn } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
   display: 'flex',
   flexDirection: 'row',
   flexWrap: 'wrap',
   marginTop: 16
};

const thumb = {
   display: 'inline-flex',
   borderRadius: 2,
   border: '1px solid #eaeaea',
   marginBottom: 8,
   marginRight: 8,
   width: 100,
   height: 100,
   padding: 4,
   boxSizing: 'border-box'
};

const thumbInner = {
   display: 'flex',
   minWidth: 0,
   overflow: 'hidden'
};

const img = {
   display: 'block',
   width: 'auto',
   height: '100%'
};



const AddProductForm = () => {
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

   const [files, setFiles] = useState([]);
   const { getRootProps, getInputProps } = useDropzone({
      accept: {
         'image/*': []
      },
      onDrop: acceptedFiles => {
         setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
         })));
      }
   });

   const thumbs = files.map(file => (
      <div style={thumb} key={file.name}>
         <div style={thumbInner}>
            <img
               className="border w-full"
               src={file.preview}
               style={img}
               // Revoke data uri after image is loaded
               onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
         </div>
      </div>
   ));

   useEffect(() => {
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      return () => files.forEach(file => URL.revokeObjectURL(file.preview));
   }, []);

   return (
      <div className="w-full">
         <div>

            <div>
               <form onSubmit={handleSubmit((data) => console.log(data))}>
                  <div className="flex justify-between items-start gap-4">
                     <div className=" w-[45%] p-4">
                        <div className="w-full">
                           <label className="label">
                              <span className="label-text text-gray-600  font-semibold ">Product Name </span>
                           </label>
                           <input
                              className="py-2 ps-3 border  me-4 rounded w-full
        "
                              //   defaultValue="test"
                              placeholder="Class Name"
                              required
                              {...register("ClassName", { required: true })}
                           />
                        </div>
                        <div className="my-3">
                           <div className="flex justify-center gap-3">
                              <div className="w-[70%]">
                                 <label className="label">
                                    <span className="flex justify-center gap-2 items-center label-text text-gray-600  font-semibold ">Category <FaRegQuestionCircle className="text-gray-400" /></span>
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
                                    <span className="label-text text-gray-600 font-semibold ">Gender </span>
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
                        <div className="my-3">
                           <label className="label">
                              <span className="label-text text-gray-600  font-semibold ">Brand</span>
                           </label>
                           <div className="">
                              <Controller
                                 name="selectedOption"
                                 control={control}
                                 defaultValue={null}
                                 render={({ field }) => (
                                    <Select {...field} options={optionsThree} />
                                 )}
                              />
                           </div>
                        </div>
                        <div className=" w-full">
                           <label className="label">

                              <span className="flex justify-center gap-2 items-center label-text text-gray-600  font-semibold ">Description<FaRegQuestionCircle className="text-gray-400" /></span>
                           </label>
                           <input
                              className="py-2 ps-3 border h-24 me-4 rounded w-full
        "
                              //   defaultValue="test"

                              placeholder="Description"
                              required
                              {...register("ClassName", { required: true })}
                           />
                        </div>
                        <p className="text-[13px] mt-2">Do not exceed 100 characters when entering the product name.</p>
                     </div>
                     <div className="w-[55%] p-4">
                        <span className="flex gap-2 items-center text-start text-gray-600  font-semibold ">Product Image <FaRegQuestionCircle className="text-gray-400" /></span>
                        <div className="flex justify-between items-center my-8">
                           <div className="flex justify-center items-center text-center dotted-element w-45 h-40 p-4">
                              <div className="flex flex-col gap-4 justify-center items-center">
                                 <CiImageOn className="text-4xl" />
                                 <p>Drop your image here, or <br />select <span className="text-blue-800 cursor-pointer">click to browse</span></p>
                              </div>
                           </div>
                           <div className="flex justify-center items-center dotted-element w-40 h-40">
                              <section className="container">
                                 <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <p>Drag some files here, or click to select files</p>
                                 </div>
                                 <aside className="w-full" style={thumbsContainer}>
                                    {thumbs}
                                 </aside>
                              </section>

                           </div>
                           <div className="flex justify-center items-center dotted-element w-24 h-40">
                              <h1>Image Upload</h1>
                           </div>
                        </div>

                        <Controller
                           name="selectedOption"
                           control={control}
                           defaultValue="" // Set the default value for the select
                           render={({ field }) => (
                              <select
                                 {...field}
                                 className="select select-bordered select-sm rounded-none w-full max-w-xs"
                              >
                                 {/* Map through the options array to dynamically create option elements */}
                                 {optionsThree.map((option) => (
                                    <option key={option.value} value={option.value}>
                                       {option.label}
                                    </option>
                                 ))}
                              </select>
                           )}
                        />
                        <input type="submit" />
                     </div>
                  </div>
               </form>
            </div>



         </div>
      </div>
   );
};

export default AddProductForm;
