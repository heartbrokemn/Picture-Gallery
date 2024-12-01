import { Permanent_Marker } from 'next/font/google'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import React from 'react'
import Link from 'next/link'

// Import Permanent Marker font
const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
})

const Navbar = () => {
  return (
    <div className={`${permanentMarker.className}`}>
      {/* Navbar Container with black background */}
      <div className="flex justify-between items-center w-full bg-black text-white shadow-lg px-8 py-5 transform transition-all duration-300 hover:scale-105">
        {/* Left side of navbar */}
        <div className="flex items-center space-x-3">
          <Link href={'/'}><h2 className="text-4xl font-bold text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:translate-x-2">
            PICTURE GALLERY
          </h2></Link>
        </div>

        {/* Right side of navbar - Avatar */}
        <div className="flex items-center space-x-4">
          <Avatar className="border-4 border-white p-1 rounded-full hover:scale-110 transform transition-all duration-300">
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" className="rounded-full" />
            <AvatarFallback className="text-lg text-white">SK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default Navbar
