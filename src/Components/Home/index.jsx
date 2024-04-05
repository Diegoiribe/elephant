import React, { useState } from 'react'
import Nav from './Nav'
import Slidder from './Slidder'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return (
    <div id="Home" className="flex flex-col gap-1 h-screen w-screen">
      <div className=" h-full w-full phone:block mac:flex  justify-center items-center">
        <Slidder isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}

export default Home
