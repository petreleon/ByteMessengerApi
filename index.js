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
app.use(bodyParser);
app.use('/api', mainRoute);

app.listen(process.env.PORT, () => console.log(`Rody Messenger listening on port ${process.env.PORT}!`));
