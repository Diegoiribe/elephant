import React, { useState } from 'react'
import Nav from '../Components/Home/Nav'

const ShopPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col gap-20">
      <div className="bg-black">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="w-full flex justify-center items-center h-[50vh] px-10">
        <h1 className="font-bold text-6xl overflow-hidden text-center">
          Coming Soon
        </h1>
      </div>
    </div>
  )
}

export default ShopPage
