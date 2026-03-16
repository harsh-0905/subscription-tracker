import { Router } from "express";
import { signup, signin, signout } from "../controller/auth.controller.js";

const authRouter = Router();
//path:/api/v1/auth/signup (post)
//path:/api/v1/auth/signin (post)
//path:/api/v1/auth/signout (post)

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.post('/signout', signout);

export default authRouter;    







