import Router from "express";

const authRouter = Router();

authRouter.get('/login', () => {
    console.log('Login');
});

export default loginRouter;