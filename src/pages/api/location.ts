import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ currentLocation: 'Beverly Hills, CA' });
};

export default handler;
