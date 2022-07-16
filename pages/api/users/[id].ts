import { NextApiRequest, NextApiResponse } from 'next';

export const users = [
  { id: 1, name: 'riad', age: 20 },
  { id: 2, name: 'med', age: 21 },
  { id: 3, name: 'simo', age: 22 },
  { id: 4, name: 'mosaab', age: 23 },
  { id: 5, name: '5', age: 55 },
  { id: 6, name: '6', age: 66 },
  { id: 7, name: '7', age: 77 },
  { id: 8, name: '8', age: 88 },
];
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const userId = id as unknown as number;
    res.status(200).json(users[userId]);
  } catch {
    res.status(404);
  }
};
export default handler;
