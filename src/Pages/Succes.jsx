import React, { useState } from 'react'
import Nav from '../Components/Home/Nav'
import { useTranslation } from 'react-i18next'
import Shop from '../Components/Shop'

const SuccessPage = () => {
  const [t, i18n] = useTranslation('global')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <div>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="w-[90%] flex justify-center items-center h-[12.5vh] px-10 border-b-2  ">
        <h1 className="font-bold text-5xl overflow-hidden">
          THANKS FOR YOU PURCHASE!
        </h1>
      </div>
      <div className="flex mac:w-4/6 flex-wrap justify-between phone:w-5/6">
        <Shop />
      </div>
    </div>
  )
}

export default SuccessPage
