import React from 'react'
import XIcon from '@mui/icons-material/X'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Description = () => {
  const [t, i18n] = useTranslation('global')
  const handleLanguageChange = (event) => {
    const newLang = event.target.value
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="mac:w-4/5 phone:w-[90%] flex phone:flex-col mac:flex-row justify-beetwen mt-10 ">
      <div className="mac:w-1/5 phone:w-full flex flex-col gap-5 phone:mb-10 mac:mb-0">
        <h1 className="text-4xl font-medium overflow-hidden">
          {t('Footer.title')}
        </h1>
        <p className="text-sm">{t('Footer.subtitle')}</p>
        <select
          name="language"
          id="language"
          className="block appearance-none w-4/5 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none cursor-pointer"
          onChange={handleLanguageChange}
          defaultValue="en"
        >
          <option value="en" className="font-medium cursor-pointer">
            {t('Footer.option-en')}
          </option>
          <option value="es" className="font-medium cursor-pointer">
            {t('Footer.option-es')}
          </option>
        </select>
      </div>
      <div className='"mac:w-4/5 phone:w-full flex flex-row phone:flex-wrap mac:flex-nowrap gap-5 phone:justify-center'>
        <div className=" flex flex-col gap-5 phone:w-[45%] mac:w-1/5">
          <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
            {t('Footer.sectionone')}
          </h2>
          <Link
            to={'/'}
            className="font-medium cursor-pointer phone:text-sm mac:text-[16px]"
          >
            {t('Footer.subtitle-one-one')}
          </Link>
          <a
            href="#news"
            className="font-medium cursor-pointer phone:text-sm mac:text-[16px]"
          >
            {t('Footer.subtitle-one-two')}
          </a>
          <Link
            to={'/contact'}
            className="font-medium cursor-pointer phone:text-sm mac:text-[16px]"
          >
            {t('Footer.subtitle-one-three')}
          </Link>
          <Link
            to={'/shop'}
            className="font-medium cursor-pointer phone:text-sm mac:text-[16px]"
          >
            {t('Footer.subtitle-one-four')}
          </Link>
        </div>
        <div className=" flex flex-col gap-5 phone:w-[45%] mac:w-1/5">
          <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
            {t('Footer.sectiontwo')}
          </h2>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            {t('Footer.subtitle-two-one')}
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            {t('Footer.subtitle-two-two')}
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            {t('Footer.subtitle-two-three')}
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            {t('Footer.subtitle-two-four')}
          </p>
          <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
            {t('Footer.subtitle-two-five')}
          </p>
        </div>
        <div className=" flex flex-col gap-5 phone:w-[100%] phone:mb-10 mac:mb-0 mac:w-[22%]">
          <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
            {t('Footer.sectionthree')}
          </h2>
          <p className="font-medium phone:text-sm mac:text-[16px]">
            {t('Footer.subtitle-three-one')}
          </p>
        </div>
        <div className=" flex justify-around gap-5 phone:w-full mac:w-1/5">
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
