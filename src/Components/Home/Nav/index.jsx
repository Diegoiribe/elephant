import React, { useState, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import InboxIcon from '@mui/icons-material/Inbox'
import StorefrontIcon from '@mui/icons-material/Storefront'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useLocation } from 'react-router-dom'
import { use } from 'i18next'

const Nav = ({ isOpen, setIsOpen }) => {
  const [t, i18n] = useTranslation('global')
  const [home, setHome] = useState(false)
  const [shop, setShop] = useState(false)
  const [checkout, setCheckout] = useState(false)

  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      setHome(true)
    } else if (pathname === '/shop') {
      setShop(true)
    } else if (pathname === '/checkout') {
      setCheckout(true)
    }
  }, [pathname])

  const phone = window.innerWidth < 850

  return (
    <>
      {phone ? (
        <nav
          isopen={isOpen}
          className=" py-4  overflow-hidden  w-screen h-28"
          style={{
            height: isOpen ? '100vh' : 'auto',
            backgroundColor: isOpen ? 'white' : 'transparent'
          }}
        >
          <div className="flex justify-between items-center px-4 mac:px-10">
            <Link
              to={'/'}
              className="phone:text-2xl tablet:text-4xl font-bold
              overflow-hidden cursor-pointer"
              style={{
                color: isOpen ? 'black' : 'white'
              }}
            >
              {t('Home.name')}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="mac:hidden">
              {/* Aquí puedes usar un ícono para el menú de hamburguesa */}

              <span
                style={{
                  color: isOpen ? 'black' : 'white'
                }}
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </span>
            </button>
          </div>
          {/* Menú desplegable debajo del botón y título */}
          <ul
            className={`mt-4 mac:mt-0 px-4 mac:px-10 ${
              isOpen ? 'flex' : 'hidden'
            } mac:flex mac:flex-row gap-2 items-center justify-center phone:flex-col h-full`}
          >
            <Link to={'/'} onClick={() => setIsOpen(!isOpen)}>
              <li
                className="text-3xl font-medium"
                style={{
                  color: isOpen ? 'black' : 'white'
                }}
              >
                {t('Home.sectionone')}
              </li>
            </Link>
            {home ? (
              <a href="/#news" onClick={() => setIsOpen(!isOpen)}>
                <li
                  className="text-3xl font-medium"
                  style={{
                    color: isOpen ? 'black' : 'white'
                  }}
                >
                  {t('Home.sectiontwo')}
                </li>
              </a>
            ) : null}

            <Link to={'/contact'} onClick={() => setIsOpen(!isOpen)}>
              <li
                className="text-3xl font-medium"
                style={{
                  color: isOpen ? 'black' : 'white'
                }}
              >
                {t('Home.sectionthree')}
              </li>
            </Link>
            <Link to={'/shop'} onClick={() => setIsOpen(!isOpen)}>
              <li
                className="text-3xl font-medium"
                style={{
                  color: isOpen ? 'black' : 'white'
                }}
              >
                {t('Home.sectionfour')}
              </li>
            </Link>
            <li className="flex gap-5 h-[30%] justify-center items-end">
              <a
                href="https://x.com/elephantarchive?s=11&t=fpiOzKtInuinFSVNvBUUCg"
                className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-white"
              >
                <XIcon />
              </a>
              <a
                href="https://www.instagram.com/elephant.archives/"
                className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-white"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="flex flex-row justify-around items-center py-4 overflow-hidden   w-screen z-50 bg-transparent h-28">
          <Link
            to={'/'}
            className="text-4xl font-bold overflow-hidden cursor-pointer"
            style={{
              color: shop || checkout ? 'black' : 'white'
            }}
          >
            Elephant
          </Link>
          <ul className="flex flex-row gap-5 items-center justify-center">
            <Link to={'/'}>
              <li className="xl:text-xl">
                <HomeIcon
                  style={{
                    color: shop || checkout ? 'black' : 'white'
                  }}
                />
              </li>
            </Link>
            {home ? (
              <a href="#news">
                <li className="xl:text-xl">
                  <NewReleasesIcon
                    style={{
                      color: shop || checkout ? 'black' : 'white'
                    }}
                  />
                </li>
              </a>
            ) : null}
            <Link to={'/contact'} onClick={() => setIsOpen(!isOpen)}>
              <li className="xl:text-xl">
                <InboxIcon
                  style={{
                    color: shop || checkout ? 'black' : 'white'
                  }}
                />
              </li>
            </Link>
            <Link to={'/shop'} onClick={() => setIsOpen(!isOpen)}>
              <li className="xl:text-xl">
                <StorefrontIcon
                  style={{
                    color: shop || checkout ? 'black' : 'white'
                  }}
                />
              </li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  )
}

export default Nav
