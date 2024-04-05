import React from 'react'
import Contact from './Contact'
import Description from './Description'

const Footer = () => {
  return (
    <footer
      id="Contact"
      className=" w-screen flex flex-col justify-center items-center py-10"
    >
      <Contact />
      <Description />
    </footer>
  )
}

export default Footer
