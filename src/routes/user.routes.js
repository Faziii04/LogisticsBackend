import { Router } from "express";
import { singUp } from "../controllers/user-controller.js";

const userRouter = Router()


userRouter.get('/', (req, res) => {
    res.send({title: 'GET user by ID '})
})

userRouter.post('/', singUp)

export default userRouter