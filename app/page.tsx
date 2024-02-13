import About from '@/components/About'
import MainPage from '@/components/MainPage'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center top-0 min-w-[80%]">
      <Navbar />

      <MainPage />
      <About />
      <div className="h-screen"></div>
    </div>
  )
}
