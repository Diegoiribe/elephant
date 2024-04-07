import { Opacity } from '@mui/icons-material'
import React, { useState } from 'react'
import './style.css'

const CardComingSoon = () => {
  const [cardComingSoon, setCardComingSoon] = useState([
    {
      title: 'Fresh Vibes',
      img: require('../../../img/elephantlogo.gif'),
      state: 'Available',
      date: '2024-03-31',
      description:
        'Boom! That’s the sound of transformation hitting the streets. Our new logo lands with attitude, style, and that rebellious edge that defines us.'
    },
    {
      title: 'First Drop',
      img: require('../../../img/firstdrop.png'),
      state: 'Available',
      date: '2024-05-05',
      description:
        'First glimpses of the inaugural Mew-Tracks drop: Where mystique meets the streets.'
    }
  ])

  return (
    <>
      {[...cardComingSoon].reverse().map((item, index) => (
        <div className="flex flex-col h-full max-w-96 bg-white min-w-96 shadow-custom rounded-3xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
          <div
            className="h-3/4 bg-white"
            key={index}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            <div
              className={`${
                item.state === 'Available'
                  ? 'bg-transparent text-transparent opacity-100 hidden'
                  : 'bg-black text-white opacity-60 items-center justify-center flex'
              } w-full h-full  flex flex-col    p-2`}
            >
              <p className="text-5xl font-bold overflow-hidden">{item.date}</p>
            </div>
          </div>
          <div className="h-1/4 p-5 flex flex-col overflow-hidden justify-start">
            <p className="font-medium text-xl overflow-hidden">{item.title}</p>
            <p className="font-medium text-gray-500 text-sm overflow-hidden">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardComingSoon
