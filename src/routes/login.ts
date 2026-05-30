import Router from "express";

const loginRouter = Router();

loginRouter.get('/login', () => {
    console.log('Login');
});

export default loginRouter;