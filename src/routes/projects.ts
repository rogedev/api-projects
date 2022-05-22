import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
    console.log('welcome to express')
    res.send('welcome to express')
})

export default router