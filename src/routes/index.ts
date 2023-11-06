import express, { Router, Request, Response } from 'express';
import mongoose, { Schema, Document, Model } from 'mongoose';
import Account from '../models/accounts';
import Customers from '../models/customers';
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

routers.get('/insert-accounts', async (_req: Request, res: Response) => {
  const data = new Account({
    account_id: _req.body.name,
    limit: _req.body.age,
    products: _req.body.products,
  });
  try {
    const dataToSave = await data.save();
    return res.status(200).json(dataToSave);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
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
