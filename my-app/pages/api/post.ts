import type { NextApiRequest, NextApiResponse } from 'next';

export type Post = {
  id: number;
  content: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  res.status(200).json({ id: 1, content: 'John Doe' });
}
