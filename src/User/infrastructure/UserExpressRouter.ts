import { Router } from 'express';
import UserExpressContoller from './UserExpressController';

const controller = new UserExpressContoller();
const userExpressRouter = Router();

userExpressRouter.post('/users', controller.create);
userExpressRouter.get('/users', controller.list);

export default userExpressRouter;