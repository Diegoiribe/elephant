import React, { useState } from 'react'
import Nav from '../Components/Home/Nav'
import { useTranslation } from 'react-i18next'

const ShopPage = () => {
  const [t, i18n] = useTranslation('global')
  console.log('es t:' + t('Shop.title'))
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col gap-20">
      <div className="bg-black">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="w-full flex justify-center items-center h-[50vh] px-10">
        <h1
          className="font-bold overflow-hidden text-center phone:h-auto tablet:h-20 text-6xl "
          style={{
            fontSize: t('Shop.title') === 'COMING SOON' ? '3.75rem' : '2rem',
            lineHeight: '1'
          }}
        >
          {t('Shop.title')}
        </h1>
      </div>
    </div>
  )
}

export default ShopPage
