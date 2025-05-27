import express from 'express';
import router from './routes';
import userExpressRouter from './User/infrastructure/UserExpressRouter';

const app = express();

app.use(express.json());
app.use(router);
app.use(userExpressRouter);

export default app;