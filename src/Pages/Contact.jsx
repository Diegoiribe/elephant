import React, { useState } from 'react'
import Nav from '../Components/Home/Nav'
import Contact from '../Components/Contact'

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col gap-20">
      <div className="bg-black">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="w-full flex justify-center items-center">
        <Contact />
      </div>
    </div>
  )
}

export default ContactPage
