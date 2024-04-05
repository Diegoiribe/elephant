import React, { useState, useEffect } from 'react'
import fondo from '../../../img/5.gif'
import Nav from '../Nav'
import { useTranslation } from 'react-i18next'

const Slidder = ({ isOpen, setIsOpen }) => {
  const [t, i18n] = useTranslation('global')

  return (
    <div
      className=" box-border w-full h-full  flex flex-col justify-end mac:items-center phone:items-end "
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className="mac:w-4/5 phone:w-full mac:mt-28 h-full  flex flex-col items-center mac:gap-10 phone:p-5 mac:py-32 justify-between"
        style={{ display: isOpen ? 'none' : null }}
      >
        <h1 className="text-white  tablet:text-6xl phone:text-4xl font-bold  overflow-hidden phone:text-center">
          {t('Home.title')}
        </h1>
        <div className="py-4 px-8 bg-white font-bold  overflow-hidden">
          {t('Home.button')}
        </div>
        <h2 className="text-white font-bold tablet:text-4xl phone:text-2xl  overflow-hidden phone:text-center">
          {t('Home.subtitle')}
        </h2>
        <p className="text-white font-medium overflow-hidden phone:text-center">
          {t('Home.legend')}
        </p>
        <div className="flex gap-2 phone:flex-col tablet:flex-row">
          <input
            type="text"
            placeholder={t('Home.placeholder')}
            className="p-4 focus:outline-none"
          />
          <button className="py-4 px-8 bg-white font-bold text-sm">
            {t('Home.buttonInput')}
          </button>
        </div>
        <p className="text-white text-sm font-medium overflow-hidden">
          {t('Home.footer')}
        </p>
      </div>
    </div>
  )
}

export default Slidder
