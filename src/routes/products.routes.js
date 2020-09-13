import {Router} from 'express'
const router = Router()

router.get('/', (req,res) => {
    res.json("Getting products list")
})

export default router