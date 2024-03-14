/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import mainRouter from './mainRouter';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandlerController } from './controllers/errorHandler';
import cookieParser from 'cookie-parser';
// dotenv.config('.env');
// dotenv.config({ path: './config.env' });
dotenv.config();
const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ORIGIN_ROUTE || 'http://localhost:3333',
    credentials: true,
  })
);
// app.use(cors({ origin: 'http://192.168.0.102:4200', credentials: true }));
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api/v1', mainRouter);

app.use('/test', (req, res, next) => {
  res.status(200).json({ message: 'working api' });
});

app.use(errorHandlerController);

mongoose
  .connect(process.env.DATABASE_URL)
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
