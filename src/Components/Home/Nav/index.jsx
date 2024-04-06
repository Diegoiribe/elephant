import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import InboxIcon from '@mui/icons-material/Inbox'
import StorefrontIcon from '@mui/icons-material/Storefront'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Nav = ({ isOpen, setIsOpen }) => {
  const [t, i18n] = useTranslation('global')

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
            <h1
              className="phone:text-2xl tablet:text-4xl font-bold  overflow-hidden"
              style={{
                color: isOpen ? 'black' : 'white'
              }}
            >
              {t('Home.name')}
            </h1>
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
              isOpen ? 'block' : 'hidden'
            } mac:flex mac:flex-row mac:gap-5 mac:items-center mac:justify-center`}
          >
            <li
              className="text-xl  "
              style={{
                color: isOpen ? 'black' : 'white'
              }}
            >
              {t('Home.sectionone')}
            </li>
            <li
              className="text-xl "
              style={{
                color: isOpen ? 'black' : 'white'
              }}
            >
              {t('Home.sectiontwo')}
            </li>
            <li
              className="text-xl "
              style={{
                color: isOpen ? 'black' : 'white'
              }}
            >
              {t('Home.sectionthree')}
            </li>
            <li
              className="text-xl "
              style={{
                color: isOpen ? 'black' : 'white'
              }}
            >
              {t('Home.sectionfour')}
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="flex flex-row justify-around items-center py-4 overflow-hidden   w-screen z-50 bg-transparent h-28">
          <h1 className="text-4xl font-bold text-white overflow-hidden f">
            Elephant
          </h1>
          <ul className="flex flex-row gap-5 items-center justify-center">
            <a href="#Home">
              <li className="xl:text-xl">
                <HomeIcon className="text-white" />
              </li>
            </a>
            <a href="#News">
              <li className="xl:text-xl">
                <NewReleasesIcon className="text-white" />
              </li>
            </a>
            <a href="#Contact">
              <li className="xl:text-xl">
                <InboxIcon className="text-white" />
              </li>
            </a>
            <Link to={'/shop'}>
              <li className="xl:text-xl">
                <StorefrontIcon className="text-white" />
              </li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  )
}

export default Nav
