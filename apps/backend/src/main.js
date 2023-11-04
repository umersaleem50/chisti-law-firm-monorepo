/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import mainRouter from './mainRouter';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { errorHandlerController } from './controllers/errorHandler';
dotenv.config('./env');
const app = express();

app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api/v1', mainRouter);

app.use(errorHandlerController);

mongoose
  .connect('mongodb://127.0.0.1:27017/lawfirm')
  .then(() => {
    console.log('Successfully connected to Database!');
  })
  .catch((err) => {
    console.log('Failed to connect to database');
    console.log(err);
  });

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

console.warn('Please fix the env. not loading....');
