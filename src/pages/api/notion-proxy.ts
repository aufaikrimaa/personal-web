// pages/api/notion-proxy.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  if (!url || typeof url !== 'string') {
    return res.status(400).send('Missing url');
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).send('Failed to fetch file');
    }

    // Forward headers
    res.setHeader(
      'Content-Type',
      response.headers.get('content-type') || 'application/octet-stream',
    );
    res.setHeader('Cache-Control', 'public, max-age=60'); // cache 1 menit

    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (err: any) {
    console.error(err);
    res.status(500).send('Error fetching file');
  }
}
