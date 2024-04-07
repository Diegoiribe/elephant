import React from 'react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { db } from '../../config'
import { collection, addDoc } from 'firebase/firestore'

const Contact = () => {
  const [t, i18n] = useTranslation('global')
  const [send, setSend] = useState(false)

  const [correo, setCorreo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let datos = {
      correo: correo
    }
    const registroPost = collection(db, 'newsletter')
    try {
      // Intenta agregar el documento a Firestore
      addDoc(registroPost, datos)
      // Si la operación es exitosa, puedes hacer algo aquí,
      // como mostrar un mensaje de éxito al usuario.
      setSend(true)
    } catch (error) {
      // Si ocurre un error, lo capturas aquí y puedes manejarlo,
      // por ejemplo, mostrando un mensaje de error al usuario.
      console.error('Error al agregar documento: ', error)
    }
  }
  return (
    <div className="mac:w-4/5 phone:w-[90%] bg-white phone:h-[360px] mac:h-[600px] rounded-3xl">
      <div
        className="w-full mac:h-2/6 phone:h-2/4  flex phone:flex-col mac:flex-row phone:justify-center mac:justify-between items-center phone:px-5 mac:px-10 phone:gap-5 mac:gap-0"
        style={{ background: '#000' }}
      >
        <p className="font-medium phone:text-[20px] mac:text-4xl overflow-hidden text-white">
          {t('Contact.title')}
        </p>
        {send ? (
          <p className="text-white font-medium phone:text-[20px] mac:text-4xl overflow-hidden">
            {t('Home.send')}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center gap-1">
            <input
              type="email"
              className="phone:h-[60px] phone:w-[165px] mac:h-[85px] mac:w-[350px] mac:rounded-s-3xl phone:rounded-s-xl  p-5 text-xl font-medium focus:outline-none phone:text-base mac:text-xl"
              placeholder={t('Contact.placeholder')}
              title={{ correo }}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <button
              type="submit"
              className="mac:h-[85px] mac:w-[150px] phone:h-[60px] phone:w-[100px] bg-white mac:rounded-e-3xl phone:rounded-e-xl phone:text-base  mac:text-xl font-medium hover:bg-gray-100 hover:text-white"
            >
              {t('Contact.button')}
            </button>
          </form>
        )}
      </div>
      <div className="bg-gray-100 phone:h-2/4 mac:h-4/6 w-full flex items-center mac:p-10 phone:p-5">
        <div className="bg-white mac:h-5/6 mac:w-2/5 phone:h-full phone:w-full phone:p-5 mac:p-10 flex items-center phone:rounded-xl mac:rounded-3xl">
          <p className="font-medium phone:text-[16px] mac:text-2xl overflow-hidden">
            {t('Contact.subtitle')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
