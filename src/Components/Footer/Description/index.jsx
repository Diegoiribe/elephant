import React from 'react'
import XIcon from '@mui/icons-material/X'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useTranslation } from 'react-i18next'

const Description = () => {
  const [t, i18n] = useTranslation('global')
  const handleLanguageChange = (event) => {
    const newLang = event.target.value
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="mac:w-4/5 phone:w-[90%] flex phone:flex-col mac:flex-row justify-beetwen mt-10 ">
      <div className="mac:w-1/5 phone:w-full flex flex-col gap-5 phone:mb-10 mac:mb-0">
        <h1 className="text-4xl font-medium overflow-hidden">Elephant</h1>
        <p className="text-sm">Entrepreneurship, Create Art, Design & Caps</p>
        <select
          name="language"
          id="language"
          className="block appearance-none w-4/5 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none cursor-pointer"
          onChange={handleLanguageChange}
          defaultValue="en"
        >
          <option value="en" className="font-medium cursor-pointer">
            English
          </option>
          <option value="es" className="font-medium cursor-pointer">
            Spanish
          </option>
        </select>
      </div>
      <div className='"mac:w-4/5 phone:w-full flex flex-row flex-wrap gap-5 phone:justify-center'>
        <div className=" flex flex-col gap-5 phone:w-[45%]">
          <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
            Guide
          </h2>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            Home
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            News
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            Contact
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            Shop
          </p>
        </div>
        <div className=" flex flex-col gap-5 phone:w-[45%]">
          <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
            Sobre Elephant
          </h2>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            Quienes somos
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            Politica De Privacidad
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            Condiciones De Servicio
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            Politica De Cookies
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            Divulgacion De Afiliacion
          </p>
        </div>
        <div className=" flex flex-col gap-5 phone:w-[100%] phone:mb-10 mac:mb-0">
          <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
            Contacto
          </h2>
          <p className="font-medium phone:text-sm mac:text-[16px]">
            Elephant@outlook.es
          </p>
          <p className="font-medium phone:text-sm mac:text-[16px]">
            6674507062
          </p>
        </div>
        <div className=" flex justify-around gap-5 phone:w-full">
          <a
            href="https://elephant-two.vercel.app/"
            className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-white"
          >
            <XIcon />
          </a>
          <span className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-white">
            <FacebookIcon />
          </span>
          <a
            href="https://www.instagram.com/elephant.archives/"
            className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-white"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Description
