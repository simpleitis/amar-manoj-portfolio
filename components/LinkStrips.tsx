'use client'

import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { toast } from 'sonner'

const LinkStrips = () => {
  return (
    <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-end items-center w-full p-3"
            href="http://linkedin.com/in/amar-Manoj"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li
          className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]"
          onClick={() => {
            navigator.clipboard.writeText('amarkrishna25@gmail.com')
            toast.success('Email copied')
          }}
        >
          <p className="flex justify-end items-center w-full p-3">
            <HiOutlineMail size={30} />
          </p>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <a
            className="flex justify-end items-center w-full p-3"
            href="https://drive.google.com/file/d/1gJ5HRl2H5fpwFxIGJSvuUeV51rSsxoTI/view?usp=share_link"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default LinkStrips
