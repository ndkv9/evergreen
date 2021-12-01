import express from 'express'
import { body, validationResult } from 'express-validator'

const router = express.Router()

router.post(
  '/signup',
  body('email').isEmail().withMessage('invalid email'),
  body('password')
    .isLength({ min: 5 })
    .withMessage('password must be at least 5 characters'),
  async (req, res) => {
    const validationError = validationResult(req)

    if (!validationError.isEmpty()) {
      const errors = validationError.array().map(err => {
        return {
          msg: err.msg,
        }
      })
      return res.status(401).json({ errors })
    }

    const { email, password } = req.body
    res.json({ email, password })
  },
)

export default router
