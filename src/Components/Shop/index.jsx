import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { buscar } from '../../api'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [chase, setChase] = useState(false)

  const handleChaseChange = (event) => {
    setChase(event.target.checked)
  }

  useEffect(() => {
    buscar('/items', setProducts)
  }, [])

  const handleBuyClick = async (price, id, name, img, chase) => {
    try {
      // Asume que 'price' ya está en dólares y necesita ser convertido a centavos
      const { data } = await axios.post('http://localhost:3000/payment', {
        id: id,
        name: name,
        img: img,
        amount: Math.round(price * 100),
        chase: chase
        // Asegúrate de enviar un entero
      })
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
          className="phone:w-full mac:w-[30%] phone:h-[70vh] mac:h-[60vh] mb-24 cursor-pointer relative group flex flex-col gap-5"
        >
          <div
            className="w-full phone:h-[65%] mac:h-[65%] desktop:h-[75%] bg-cover bg-center relative flex justify-center items-center"
            style={{
              backgroundImage: `url(${item.img})`
            }}
          >
            {/* Modificación aquí: */}
            {/* <span
              className=" w-40 h-16 opacity-0 group-hover:opacity-100 absolute  flex justify-center items-center text-white bg-zinc-900  text-xl font-medium transition-opacity duration-300 rounded-md"
              onClick={() =>
                handleBuyClick(item.price, item.id, item.title, item.img)
              }
            >
              Quick View
            </span> */}
          </div>
          <div className="w-full phone:h-[35%] mac:h-[35%] desktop:h-[25%] flex flex-col justify-around">
            <h1 className="text-xl font-bold text-black px-10">{item.title}</h1>
            <p className="font-bold px-10 overflow-hidden">${item.price}</p>
            <div className="w-full  flex items-center justify-between mt-5">
              {item.status === 'Coming Soon' ? (
                <p className="font-medium w-full text-end overflow-hidden">
                  {item.status}
                </p>
              ) : (
                <>
                  <label
                    htmlFor="chase"
                    className="text-sm text-gray-500 w-3/6 "
                  >
                    Want in on the shiny edition?"
                    <input
                      id="chase"
                      type="checkbox"
                      className="mx-5"
                      checked={chase}
                      onChange={handleChaseChange}
                    />
                  </label>

                  <p
                    className="bg-neutral-800 hover:bg-black  w-2/6 p-2 font-bold uppercase text-white cursor-pointer disabled:cursor-not-allowed text-center"
                    onClick={() =>
                      handleBuyClick(
                        item.price,
                        item.id,
                        item.title,
                        item.img,
                        chase
                      )
                    }
                  >
                    Pay
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Shop
