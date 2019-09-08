import express from 'express';
import userRoute from './user';

const mainRoute = express.Router();
mainRoute.use('/users', userRoute);

export default mainRoute;
