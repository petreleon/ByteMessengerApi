import express from 'express';
import UserController from '../controllers/user';
import userModel from '../models/user';

const userController = new UserController(userModel);

const userRoute = express.Router();

userRoute.get('/', (req, res) => {
  console.log('here');
  userController.getUsers((error, result) => {
    if (error) return res.status(500).end();
    return res.json(result).end();
  });
});

userRoute.post('/', (req, res) => {
  userController.addUser(req.body, (err) => {
    if (err) {
      return res.status(500).end();
    }
    return res.status(201).end();
  });
});


export default userRoute;
