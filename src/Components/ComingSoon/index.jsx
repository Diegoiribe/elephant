import React, { useRef } from 'react'
import CardComingSoon from './CardComingSoon'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useTranslation } from 'react-i18next'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const ComingSoon = () => {
  const [t, i18n] = useTranslation('global')
  const contentRef = useRef(null)
  const phone = window.innerWidth < 850

  const smoothScroll = (element, start, end, duration) => {
    let startTime = null

    // La función que se ejecutará en cada cuadro de la animación
    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime
      }
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1) // Asegúrate de no exceder 1

      // Calcula el próximo punto del desplazamiento
      const point = start + (end - start) * progress

      // Desplaza el elemento
      element.scrollLeft = point

      // Si la animación no ha terminado, sigue ejecutándola
      if (timeElapsed < duration) {
        requestAnimationFrame(animate)
      }
    }

    // Comienza la animación
    requestAnimationFrame(animate)
  }

  // En tus funciones de flecha, llamarías a smoothScroll así:
  const arrowLeft = () => {
    if (contentRef.current) {
      // Suponiendo que quieres que el desplazamiento sea más lento, aumenta la duración
      smoothScroll(
        contentRef.current,
        contentRef.current.scrollLeft,
        contentRef.current.scrollLeft - 300,
        500
      ) // Duración en milisegundos
    }
  }

  const arrowRight = () => {
    if (contentRef.current) {
      smoothScroll(
        contentRef.current,
        contentRef.current.scrollLeft,
        contentRef.current.scrollLeft + 300,
        500
      ) // Duración en milisegundos
    }
  }

  return (
    <div
      id="News"
      className="w-screen h-screen  flex flex-col  justify-center items-center"
      style={{ backgroundColor: '#f7f7f7' }}
    >
      <div className="w-4/5 flex justify-between items-center">
        <h1 className="text-6xl font-bold text-start w-4/5 h-24">
          {t('News.title')}
        </h1>
        {phone ? null : (
          <div className="flex gap-5 p-2">
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-custom cursor-pointer"
              onClick={() => arrowLeft()}
            >
              <ArrowBackIosNewIcon />
            </span>
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-custom cursor-pointer"
              onClick={() => arrowRight()}
            >
              <ArrowForwardIosIcon />
            </span>
          </div>
        )}
      </div>
      <div className="w-full phone:h-[75%] mac:h-4/6 flex justify-end">
        <div
          ref={contentRef}
          className="phone:w-full mac:w-[90%] phone:h-full flex items-center overflow-auto scroll justify-between gap-3 p-5"
        >
          <CardComingSoon />
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
