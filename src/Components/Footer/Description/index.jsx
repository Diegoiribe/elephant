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
    <div className="w-4/5 flex justify-between mt-10 ">
      <div className="w-1/5 flex flex-col gap-5">
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
      <div className=" flex flex-col gap-5">
        <h2 className="text-gray-500 font-medium">Guide</h2>
        <p className="font-medium cursor-pointer">Home</p>
        <p className="font-medium cursor-pointer">News</p>
        <p className="font-medium cursor-pointer">Contact</p>
        <p className="font-medium cursor-pointer">Shop</p>
      </div>
      <div className=" flex flex-col gap-5">
        <h2 className="text-gray-500 font-medium">Sobre Elephant</h2>
        <p className="font-medium cursor-pointer">Quienes somos</p>
        <p className="font-medium cursor-pointer">Politica De Privacidad</p>
        <p className="font-medium cursor-pointer">Condiciones De Servicio</p>
        <p className="font-medium cursor-pointer">Politica De Cookies</p>
        <p className="font-medium cursor-pointer">Divulgacion De Afiliacion</p>
      </div>
      <div className=" flex flex-col gap-5">
        <h2 className="text-gray-500 font-medium">Contacto</h2>
        <p className="font-medium">Elephant@outlook.es</p>
        <p className="font-medium">6674507062</p>
      </div>
      <div className=" flex justify-around gap-5 ">
        <span className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer">
          <XIcon />
        </span>
        <span className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer">
          <FacebookIcon />
        </span>
        <span className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer">
          <InstagramIcon />
        </span>
      </div>
    </div>
  )
}

export default Description
