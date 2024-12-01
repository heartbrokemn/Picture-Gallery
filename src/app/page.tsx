/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { CldImage,  CldUploadButton } from "next-cloudinary";
import { useState } from "react";

interface uploadImage{
  event:"success",
  info:{public_id:string};
}

export default function Home() {
  const [imageId, setimageId]= useState('cld-sample-5')
  
  return (
    <main className="flex mr-9 flex-col gap-8 row-start-2 items-center sm:items-start">
      <CldUploadButton 
        uploadPreset="picturegalary123" 
        options={{ cloudName: "dl2efwfol" }}  // Replace with your correct cloud name
        onUpload={(results) => {
       const res= results as uploadImage
       setimageId(res.info.public_id)
         }}
      />
      {/* view images */}
    <CldImage
  width="400"
  height="400"
  src={imageId}
  sizes="50"
  alt="Description of my image"
/>


    </main>
  );
}
