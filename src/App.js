import './App.css'
import HomePage from './Pages/Home'
import ContactPage from './Pages/Contact'
import Shop from './Pages/Shop'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
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
        <Route path="*" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
