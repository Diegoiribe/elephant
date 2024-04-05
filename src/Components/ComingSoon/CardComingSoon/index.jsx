import { Opacity } from '@mui/icons-material'
import React, { useState } from 'react'
import './style.css'

const CardComingSoon = () => {
  const [cardComingSoon, setCardComingSoon] = useState([
    {
      title: 'Baseball is Back',
      img: 'https://www.neweracap.com/cdn/shop/files/MULTI24_CourtSport_HomePage_frames_Carousel_800x1000_cb7e5c81-3300-4f5e-b8cc-335b84aa5713.jpg?v=1711374269&width=400',
      state: 'Coming Soon',
      date: '2022-12-12',
      description:
        'Just Caps Variety Pack just dropped. Get select MLB teams in a mix of patterns and fabrics now!'
    },
    {
      title: 'Baseball is Back',
      img: 'https://www.neweracap.com/cdn/shop/files/MLB24_ClassicsDrop_HomePage_frames_Carousel_800x1000_f7f9f081-08f2-47cd-a8ff-e6399bba2dfd.jpg?v=1710939271&width=400',
      state: 'Available',
      date: '2022-12-12',
      description:
        'Just Caps Variety Pack just dropped. Get select MLB teams in a mix of patterns and fabrics now!'
    },
    {
      title: 'Baseball is Back',
      img: 'https://www.neweracap.com/cdn/shop/files/MLB24_Baseball_is_Back_HomePage_framesCarousel_800x1000_01ee6e23-fc85-4fd7-8a9e-af3e8e0f32b9.jpg?v=1711026288&width=400',
      state: 'Available',
      date: '2022-12-12',
      description:
        'Just Caps Variety Pack just dropped. Get select MLB teams in a mix of patterns and fabrics now!'
    },
    {
      title: 'Baseball is Back',
      img: 'https://www.neweracap.com/cdn/shop/files/MULTI24_VarietyPcK_HomePage_frames_Carousel_MLB_800x1000_561e0b06-e9c7-4504-b334-901a191b0b4d.jpg?v=1711543737&width=400',
      state: 'Coming Soon',
      date: '2022-12-12',
      description:
        'Just Caps Variety Pack just dropped. Get select MLB teams in a mix of patterns and fabrics now!'
    },
    {
      title: 'Baseball is Back',
      img: 'https://www.neweracap.com/cdn/shop/files/MLB24_Mascots_HomePage_framesCarousel_800x1000_fc1fa7e2-6a9c-4975-bb26-01cf90451f9a.jpg?v=1711111987&width=400',
      state: 'Coming Soon',
      date: '2022-12-12',
      description:
        'Just Caps Variety Pack just dropped. Get select MLB teams in a mix of patterns and fabrics now!'
    }
  ])

  return (
    <>
      {cardComingSoon.map((item, index) => (
        <div className="flex flex-col h-full max-w-96 bg-white min-w-96 shadow-custom rounded-3xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
          <div
            className="h-3/4 bg-white  "
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
                  ? 'bg-transparent text-transparent opacity-100'
                  : 'bg-black text-white opacity-60 items-center justify-center'
              } w-full h-full  flex flex-col    p-2`}
            >
              <p className="text-5xl font-bold overflow-hidden">{item.date}</p>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-5 overflow-hidden">
            <p className="font-medium text-xl">{item.title}</p>
            <p className="font-medium text-gray-500 text-sm">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardComingSoon
