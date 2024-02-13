import About from '@/components/About'
import LinkStrips from '@/components/LinkStrips'
import MainPage from '@/components/MainPage'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center sm:min-w-[80%]">
      <LinkStrips />
      <Navbar />

      <MainPage />
      <About />
      <Skills />
      <Work />
    </div>
  )
}
