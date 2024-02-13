'use client'

import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const CompanyCarousel = () => {
  const companies = [
    'Suzuki',
    'Hyundai',
    'Tata',
    'Honda',
    'Volkswagen',
    'Renault',
  ]
  const items = companies.map((company) => {
    return (
      <div key={company} className="h-36">
        <Image
          fill={true}
          src={`/${company}.png`}
          alt="skill logo"
          style={{ objectFit: 'contain' }}
        />
      </div>
    )
  })

  return (
    <div className="mt-20 bg-slate-800 bg-opacity-30 p-10 rounded-xl flex flex-col items-center justify-center">
      <p className="text-xl font-semibold mb-5 ">I have worked on</p>
      <AliceCarousel
        autoPlayInterval={800}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        autoPlay
        infinite
        items={items}
      />
    </div>
  )
}

export default CompanyCarousel
