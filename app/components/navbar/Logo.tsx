"use client"

import { useRouter } from "next/router"
import Image from "next/image"

const Logo = () => {
    // const router = useRouter();
  return (
    
    <Image 
    src="/images/logo.png"
    width="100"
    height="100"
    alt="Logo"
    className="hidden md:block cursor-pointer"
    />
    
  )
}

export default Logo
