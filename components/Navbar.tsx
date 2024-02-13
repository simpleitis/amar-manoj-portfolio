'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="flex justify-between sticky top-0 p-5 z-20 w-full sm:w-max sm:min-w-[80%] shadow-lg rounded-b-3xl  sm:rounded-3xl sm:mt-10 bg-slate-800 bg-opacity-30 backdrop-blur-2xl border border-slate-700 ">
      <Link href="#home">
        <div className="self-center font-bold text-gray-800 text-2xl sm:text-3xl py-3 flex">
          <div className=" flex justify-center items-center self-center text-white pl-2">
            <Image
              src="/piston.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <p>Amar Manoj</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between pr-3 lg:pr-0 ">
        <nav>
          <section className="MOBILE-MENU flex lg:hidden bg-inherit">
            <div onClick={() => setIsNavOpen((prev) => !prev)}>
              <div className="bg-inherit">
                <div className="block h-0.5 w-8 bg-white mb-2 animate-pulse"></div>
                <div className="block h-0.5 w-8 bg-white mb-2 animate-pulse"></div>
                <div className="block h-0.5 w-8 bg-white mb-2 animate-pulse"></div>
              </div>
            </div>
            <div
              className={
                isNavOpen
                  ? 'absolute  top-0 left-0 z-20 flex flex-col justify-evenly items-center'
                  : 'hidden'
              }
            >
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8 z-40 "
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-slate-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>

              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between font-medium text-white bg-slate-800 bg-opacity-50 backdrop-blur-2xl w-screen h-screen">
                <li className="border-b border-gray-400 my-8 text-2xl font-bold">
                  <Link onClick={() => setIsNavOpen(false)} href="#home">
                    Home
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 text-2xl font-bold">
                  <Link onClick={() => setIsNavOpen(false)} href="#about">
                    About
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 text-2xl font-bold">
                  <Link onClick={() => setIsNavOpen(false)} href="#skills">
                    Skills
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 text-2xl font-bold">
                  <Link onClick={() => setIsNavOpen(false)} href="#work">
                    Work
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 text-2xl font-bold">
                  <Link onClick={() => setIsNavOpen(false)} href="#contact">
                    Contact
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 text-2xl font-bold">
                  <a href="/credits" className="group transition duration-300">
                    Credits
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"></span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center font-medium text-white">
            <li>
              <Link href="#home">
                <p className="group transition duration-300">
                  Home
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"></span>
                </p>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <p className="group transition duration-300">
                  About
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"></span>
                </p>
              </Link>
            </li>
            <li>
              <Link href="#skills">
                <p className="group transition duration-300">
                  Skills
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"></span>
                </p>
              </Link>
            </li>
            <li>
              <Link href="#work">
                <p className="group transition duration-300">
                  Work
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"></span>
                </p>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <p className="group transition duration-300">
                  Contact
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"></span>
                </p>
              </Link>
            </li>
            <li>
              <a href="/credits" className="group transition duration-300">
                Credits
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
