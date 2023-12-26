import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

const ImageUploader = () => {
   const { control, handleSubmit } = useForm();

   const onDrop = (acceptedFiles) => {
      // Handle the dropped files here
      console.log(acceptedFiles);
   };

   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

   const onSubmit = (data) => {
      // Handle form submission here
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} name="image" ref={control.register} />
            {isDragActive ? (
               <p>Drop the image here...</p>
            ) : (
               <p>Drop your image here, or click to browse</p>
            )}
         </div>
         <button type="submit">Submit</button>
      </form>
   );
};

const dropzoneStyles = {
   border: '2px dashed #cccccc',
   borderRadius: '4px',
   padding: '20px',
   textAlign: 'center',
   cursor: 'pointer',
};

export default ImageUploader;
