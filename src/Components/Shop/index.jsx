import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { buscar } from '../../api'

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    buscar('/items', setProducts)
  }, [])

  const handleBuyClick = async (price, id) => {
    try {
      // Asume que 'price' ya está en dólares y necesita ser convertido a centavos
      const { data } = await axios.post(
        'https://apistripetest.onrender.com/api/checkout',
        {
          id: id,
          amount: Math.round(price * 100) // Asegúrate de enviar un entero
        }
      )
      console.log(data)

      // Asegúrate de que la URL de la sesión se incluya correctamente en la respuesta del servidor
      if (data && data.sessionUrl) {
        window.location.href = data.sessionUrl // Redirecciona al usuario a Stripe Checkout
      } else {
        console.error('Session URL not provided')
      }
    } catch (error) {
      console.error('Error during payment:', error)
      // Considera mostrar un mensaje de error al usuario
    }
  }

  return (
    <>
      {products.map((item) => (
        <div
          key={item.id}
          className="phone:w-full mac:w-[30%] h-[60vh] mb-24 cursor-pointer relative group"
        >
          <div
            className="w-full h-[75%] bg-cover bg-center relative flex justify-center items-center"
            style={{
              backgroundImage: `url(${item.img})`
            }}
          >
            {/* Modificación aquí: */}
            <span
              className=" w-40 h-16 opacity-0 group-hover:opacity-100 absolute  flex justify-center items-center text-white bg-zinc-900  text-xl font-medium transition-opacity duration-300 rounded-md"
              onClick={() => handleBuyClick(item.price, item.id)}
            >
              Quick View
            </span>
          </div>
          <div className="w-full h-[25%] flex flex-col justify-around px-10">
            <h1 className="text-xl font-bold text-black">{item.title}</h1>
            <p className="font-bold">${item.price}</p>
            <div className="w-full flex items-end justify-end">
              <p className="font-bold">{item.status}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Shop
