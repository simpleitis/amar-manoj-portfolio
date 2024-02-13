import Image from 'next/image'
import React from 'react'

const MainPage = () => {
  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 justify-center items-center mt-20 max-w-[80%]" id='home'>
      <div>
        <p className="text-5xl font-semibold px-1">Hi, I am </p>
        <p className="text-5xl font-semibold"></p>
        <p className="text-8xl font-semibold text-orange-500">Amar Manoj</p>
        <p className="text-slate-500 text-2xl">
          Learning, fixing, building the future!
        </p>
      </div>
      <div>
        <Image src="/mechanic.png" alt="main" width={600} height={600} />
      </div>
    </div>
  )
}

export default MainPage
