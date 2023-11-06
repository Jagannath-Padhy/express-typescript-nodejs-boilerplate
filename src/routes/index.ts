import express, { Router, Request, Response } from 'express';
import mongoose, { Schema, Document, Model } from 'mongoose';
import Account from '../models/accounts';
import custom from '../models/customers';
const routers: Router = express.Router();
const dbURL: string = 'mongodb://localhost:27017/sample_analytics';

async function connectToDatabase() {
  try {
    await mongoose.connect(dbURL);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();

routers.get('/insert', (_req: Request, res: Response) => {
  return res.json(' will do later');
});

routers.get('/all-data-accounts', async (req: Request, res: Response) => {
  const users = await Account.find().lean();
  console.log(users);
  return res.send(users);
});
routers.get('/all-data-customers', async (req: Request, res: Response) => {
  const users = await Customers.find().lean();
  console.log(users);
  return res.send(users);
});

export default routers;
