import express from "express"
import { loginUser, SignupUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/signup",SignupUser)
userRouter.post("/login", loginUser)

export default userRouter;