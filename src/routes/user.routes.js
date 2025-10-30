import { Router } from "express";
import { singUp, singIn} from '../controllers/user-controller.js'

const userRouter = Router()

userRouter.get('/', (req, res, next) => {
    
})



userRouter.get('/login/', (req, res) => {
    res.send({title: 'GET user by ID '})
})

userRouter.post('/login/', singUp)

export default userRouter