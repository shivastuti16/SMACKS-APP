import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

let orders: any[] = []; // Temporary in-memory storage

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { items, paymentMethod } = req.body;

    if (!items || !paymentMethod) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    const newOrder = {
      id: uuidv4(),
      items,
      paymentMethod,
      status: 'Pending',
    };

    orders.push(newOrder);
    res.status(201).json(newOrder);
  } else if (req.method === 'GET') {
    res.status(200).json(orders);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
