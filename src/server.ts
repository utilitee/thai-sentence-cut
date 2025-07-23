import express, { Request, Response } from 'express';
import { lengthOfThaiString, splitThaiStringByLength } from './index';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/length', (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Invalid input, "text" must be a string.' });
  }
  const length = lengthOfThaiString(text);
  res.json({ length });
});

app.post('/split', (req: Request, res: Response) => {
  const { text, maxLength } = req.body;
  if (!text || typeof text !== 'string' || !maxLength || typeof maxLength !== 'number') {
    return res.status(400).json({ error: 'Invalid input, "text" must be a string and "maxLength" must be a number.' });
  }
  const result = splitThaiStringByLength(text, maxLength);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});