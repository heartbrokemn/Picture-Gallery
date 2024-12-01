'use client'

import { CldImage } from "next-cloudinary"

const ViewImage = ({src}:{src:string}) => {
  return (
    <>
       
    <CldImage
    width="400"
    height="400"
    src={src}
    sizes="50"
    alt="Description of my image"
  />
  
  
  </>

  )
}

export default ViewImage