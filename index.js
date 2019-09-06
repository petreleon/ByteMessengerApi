import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(bodyParser);

app.listen(process.env.PORT, () => console.log(`Rody Messenger listening on port ${process.env.PORT}!`));
