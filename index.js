import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import mainRoute from './api/routes/main';

dotenv.config();

// create database connection
mongoose.connect(process.env.MONGO_COLLECTION);
mongoose.set('debug', true);

const app = express();
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use('/api', mainRoute);

app.listen(parseInt(process.env.PORT, 10), () => console.log(`Rody Messenger listening on port ${process.env.PORT}!`));
