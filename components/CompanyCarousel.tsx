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
      <div className="h-36">
        <Image
          fill={true}
          src={`/${company}.png`}
          alt="skill logo"
          style={{ objectFit: 'contain' }}
        />
      </div>
    )
  })

  const responsive = {
    500: {
      items: 2,
    },
    700: {
      items: 3,
    },
  }

  return (
    <div className="mt-20">
      <p className="text-xl font-semibold mb-5">
        Brands that I have worked on!
      </p>
      <AliceCarousel
        autoPlayInterval={800}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        autoPlay
        infinite
        responsive={responsive}
        items={items}
      />
    </div>
  )
}

export default CompanyCarousel
