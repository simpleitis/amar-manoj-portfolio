import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-screen bg-neutral-800 flex justify-center mt-20 p-5 gap-2">
      <p>© All rights reserved by Amar Manoj</p>
      <Image src="/piston.png" alt="footer" width={30} height={30} />
    </div>
  )
}

export default Footer
