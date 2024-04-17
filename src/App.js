import './App.css'
import HomePage from './Pages/Home.jsx'
import ContactPage from './Pages/Contact.jsx'
import Shop from './Pages/Shop.jsx'
import Footer from './Components/Footer/index.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
} from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import CheckOut from './Pages/Checkout.jsx'
import { loadStripe } from '@stripe/stripe-js'
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js'

function App() {
  const stripePromise = loadStripe(
    'pk_test_51OWEMfLyMC8bJPA975YcF0VCMxuTNCPjsKsOpWZmtWcnLLk4Q3kcolvwkBBmjotIPA4daijAdxyze8yIimLNd71E00DElPZnVK'
  )

  const CheckoutForm = () => {
    const fetchClientSecret = useCallback(() => {
      // Create a Checkout Session
      return fetch('/create-checkout-session', {
        method: 'POST'
      })
        .then((res) => res.json())
        .then((data) => data.clientSecret)
    }, [])

    const options = { fetchClientSecret }

    return (
      <div id="checkout">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    )
  }

  const Return = () => {
    const [status, setStatus] = useState(null)
    const [customerEmail, setCustomerEmail] = useState('')

    useEffect(() => {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)
      const sessionId = urlParams.get('session_id')

      fetch(`/session-status?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status)
          setCustomerEmail(data.customer_email)
        })
    }, [])

    if (status === 'open') {
      return <Navigate to="/checkout" />
    }

    if (status === 'complete') {
      return (
        <section id="success">
          <p>
            We appreciate your business! A confirmation email will be sent to{' '}
            {customerEmail}. If you have any questions, please email{' '}
            <a href="mailto:orders@example.com">orders@example.com</a>.
          </p>
        </section>
      )
    }

    return null
  }

  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  return (
    <Router className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/return" element={<Return />} />
        <Route path="*" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
