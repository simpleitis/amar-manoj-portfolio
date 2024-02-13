import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div
      className="bg-silver-400 h-max mx-5 sm:w-96 mt-20 border bg-lime-300 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-10 p-5 min-w-[60%] text-slate-800 "
      id="about"
    >
      <div className="bg-lime-200 rounded-xl flex flex-col  items-center p-5 border border-lime-500 ">
        <p className="font-bold underline mb-5 text-lg p-2">Work Story</p>
        <p className="text-lg">
          {` With close to 5 years under my belt working with both 4-wheelers and
          2-wheelers, I've gained a deep understanding of diverse automotive
          systems and the unique challenges each presents. This comprehensive
          experience allows me to confidently tackle a wide range of tasks and
          effectively contribute to any team focused on the world of
          automobiles.`}
        </p>
      </div>
      <div className="bg-lime-200 rounded-xl flex flex-col items-center p-5 border border-lime-500">
        <p className="font-bold underline mb-5 text-lg">Personal Story</p>
        <p className="text-lg">
          {`My love affair with automobiles began not in a roaring showroom or on
          a polished racetrack, but on a much humbler stage: the living room
          floor. It all started with a toy truck. I was captivated by the way it
          rolled, the satisfying click of its wheels, the promise of adventure
          it embodied. I didn't just play with it; I disassembled it, explored
          its inner workings, and rebuilt it, fueled by an insatiable curiosity
          that transcended mere playtime.`}
        </p>
      </div>
    </div>
  )
}

export default About
