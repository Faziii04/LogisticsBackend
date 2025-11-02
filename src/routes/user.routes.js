import { Router } from "express";
import { singUp, signIn} from '../controllers/user-controller.js'

const userRouter = Router()

userRouter.get('/', (req, res, next) => {
    res.send({message: "hola"})
})



userRouter.post('/login/', signIn)

userRouter.post('/register/', singUp)

export default userRouter