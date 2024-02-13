import React from 'react'

const Contact = () => {
  return (
    <div
      id="contact"
      className="p-10 text-2xl font-bold flex flex-col rounded-xl hover:scale-110 duration-300 border mx-10 w-[30%] mb-10 isolate aspect-video bg-white/20 shadow-lg ring-1 ring-black/5"
    >
      <p className="text-xl md:text-5xl dark:text-white font-bold mb-10 underline">
        Contact
      </p>
      <div>
        <p className="text-4xl text-lime-400">Amar Manoj</p>
        <p className="text-2xl">Automobile Engineer</p>
      </div>
      <div className="flex flex-col justify-start items-end">
        <p className="text-xl text-neutral-300">amarm1234@gmail.com</p>
        <p className="text-xl text-neutral-300">9567977334</p>
      </div>
    </div>
  )
}

export default Contact
