import { Router } from 'express'
import { createSession } from '../Controllers/PaymentController.js'

const router = Router()

router.post('/payment', createSession)
router.get('/success', (req, res) => res.redirect('/'))
router.get('/cancel', (req, res) => res.redirect('/shop'))

export default router
