import { login } from '@/services/auth/authService';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      const user = await login(email, password);
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } else {
    res.status(405).end();
  }
}
