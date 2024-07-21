import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import dbConnect from './config/dbConnect.js';
import logger from './logger.js';

const app = express();
const port = process.env.PORT || 3000;

//middlewares:
app.use(bodyParser.json());

//dbConnect:
dbConnect();

//Routes

//port localhost:
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
