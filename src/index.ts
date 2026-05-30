import express from 'express';
import type{ Application } from 'express';
import loginRouter from './routes/login';

const app: Application = express();
const PORT: number = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/v1',loginRouter);

app.listen(PORT, () => {
    console.log(`Running in ${PORT}`);
});