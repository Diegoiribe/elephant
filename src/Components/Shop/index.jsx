import React, { useState } from 'react'

const Shop = () => {
  const [products, setProducts] = useState([
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5ee3d33b0118603e6ef3a46e/1712339463367-4PQU3TWBU1MUQFRNVNS0/33B9DC37-C754-491F-8763-88023E263092.png?format=750w',
      title: '[LIMITED] DIVINE BRICK FIGURE',
      price: 34.99,
      status: 'Sold Out'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5ee3d33b0118603e6ef3a46e/1712339396594-60TXP8BVW9B4NEIEO7K0/7AFA4D48-3EBB-448B-BA34-67E554436320.png?format=750w',
      title: '[LIMITED] TINY BRICK SET',
      price: 99.99,
      status: 'Sold Out'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5ee3d33b0118603e6ef3a46e/1712339463367-4PQU3TWBU1MUQFRNVNS0/33B9DC37-C754-491F-8763-88023E263092.png?format=750w',
      title: '[LIMITED] DIVINE BRICK FIGURE',
      price: 34.99,
      status: 'Sold Out'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5ee3d33b0118603e6ef3a46e/1712339396594-60TXP8BVW9B4NEIEO7K0/7AFA4D48-3EBB-448B-BA34-67E554436320.png?format=750w',
      title: '[LIMITED] TINY BRICK SET',
      price: 99.99,
      status: 'Sold Out'
    }
  ])

  const handleBuyProduct = async (productId) => {
    try {
      const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId })
      })
      if (response.ok) {
        const session = await response.json()
        // Aquí iría el redireccionamiento a Stripe Checkout
        window.location.href = session.url
        // por ejemplo: window.location = session.url;
      } else {
        // Manejar errores aquí, por ejemplo, mostrando un mensaje al usuario
        console.error('Error al crear la sesión de checkout')
      }
    } catch (error) {
      // Manejar errores aquí
      console.error('Error al realizar la solicitud:', error)
    }
  }

  return (
    <>
      {products.map((item, index) => (
        <div
          key={index}
          className="w-[30%] h-[60vh] mb-24 cursor-pointer relative group"
        >
          <div
            className="w-full h-[75%] bg-cover bg-center relative flex justify-center items-center"
            style={{
              backgroundImage: `url(${item.img})`
            }}
          >
            {/* Modificación aquí: */}
            <span
              onClick={() => handleBuyProduct(item.id)}
              className=" w-40 h-16 opacity-0 group-hover:opacity-100 absolute  flex justify-center items-center text-white bg-zinc-900  text-xl font-medium transition-opacity duration-300 rounded-md"
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
