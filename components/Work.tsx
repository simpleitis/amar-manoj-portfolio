'use client'

import ImageCarousel from './ImageCarousel'

const Work = () => {
  return (
    <div id="work" className="mt-20 w-full px-10 sm:max-w-[60%]">
      <p className="text-3xl md:text-5xl dark:text-white font-bold mb-10 underline">
        Work
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col items-center border gap-2 p-2 rounded-lg w-full">
          <p className="font-bold text-2xl">Experience</p>
          <ul>
            <li>
              <span className="text-2xl font-bold">.</span> 5+ years working on
              mechanical problems of both 2 and 4 wheelers.
            </li>
            <li>
              <span className="text-2xl font-bold">.</span> Experience working
              with OBD system.
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center border gap-2 p-2 rounded-lg">
          <p className="font-bold text-2xl">Achievements</p>
          <ul>
            <li>
              <span className="text-2xl font-bold">.</span> Mastered electrical
              repairs, becoming the workshop's go-to expert.
            </li>
            <li>
              <span className="text-2xl font-bold">.</span> Mastered embedded
              code, rescued systems from critical issues..
            </li>
          </ul>
        </div>
      </div>
      <ImageCarousel />
    </div>
  )
}

export default Work


