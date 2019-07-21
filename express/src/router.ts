import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  return res.json({ teste: 'web-inar meta' })
})

export default router
