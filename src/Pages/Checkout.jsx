import React, { useState } from 'react'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Nav from '../Components/Home/Nav'
import axios from 'axios'

// Recuerda mantener tu clave de API segura y no exponerla innecesariamente
const stripePromise = loadStripe(
  'pk_test_51OWEMfLyMC8bJPA975YcF0VCMxuTNCPjsKsOpWZmtWcnLLk4Q3kcolvwkBBmjotIPA4daijAdxyze8yIimLNd71E00DElPZnVK'
)

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })
    setLoading(true)
    if (!error) {
      const { id } = paymentMethod

      try {
        const { data } = await axios.post(
          'http://localhost:3001/api/checkout',
          {
            id,
            amount: 10000
          }
        )
        console.log(data)
        console.log(id)

        elements.getElement(CardElement).clear()
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
  }

  return (
    <form
      className="w-[50%] h-4/5 shadow-custom flex flex-col justify-center items-center gap-5"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-medium ">Price: $100</h2>
      <CardElement className="w-2/4" />
      <button
        disabled={!stripe}
        type="submit"
        className="w-2/4 border-2 hover:bg-slate-200"
      >
        {loading ? 'Loading...' : 'Pay'}
      </button>
    </form>
  )
}

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Elements stripe={stripePromise}>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-screen h-screen flex items-center justify-center mb-10">
        <div className="w-4/5 h-[87.5vh] flex justify-between items-start gap-5 p-5">
          <div
            className="w-[50%] h-4/5 shadow-custom bg-cover bg-center"
            style={{
              backgroundImage: `url(${'https://images.squarespace-cdn.com/content/v1/5ee3d33b0118603e6ef3a46e/1712339463367-4PQU3TWBU1MUQFRNVNS0/33B9DC37-C754-491F-8763-88023E263092.png?format=750w'})`
            }}
          ></div>
          <CheckoutForm />
        </div>
      </div>
    </Elements>
  )
}

export default Checkout
