import React, { useState } from 'react'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Nav from '../Components/Home/Nav'

// Recuerda mantener tu clave de API segura y no exponerla innecesariamente
const stripePromise = loadStripe(
  'pk_test_51OWEMfLyMC8bJPA975YcF0VCMxuTNCPjsKsOpWZmtWcnLLk4Q3kcolvwkBBmjotIPA4daijAdxyze8yIimLNd71E00DElPZnVK'
)

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })
  }

  return (
    <form className="w-[50%] h-4/5 shadow-custom" onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Buy</button>
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
          <div className="w-[50%] h-4/5 shadow-custom"></div>
          <CheckoutForm />
        </div>
      </div>
    </Elements>
  )
}

export default Checkout
