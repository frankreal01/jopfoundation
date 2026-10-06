import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { clerkMiddleware } from '@clerk/express';
import { connectDB } from './config/db.js';
import webhooks from './routes/webhooks.js';
import users from './routes/users.js';
import contact from './routes/contact.js';

const app = express();
app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }));

app.use('/api/webhooks', webhooks); // raw body, signature-verified
app.use(express.json({ limit: '100kb' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 300 }));
app.use(clerkMiddleware());

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'jop-foundation-api' }));
app.use('/api/users', users);
app.use('/api/contact', contact);

app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong on our side. Please try again.' });
});

const port = process.env.PORT || 5000;
connectDB()
  .then(() => app.listen(port, () => console.log(`API running on http://localhost:${port}`)))
  .catch((err) => { console.error(err.message); process.exit(1); });
