import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { Message } from '../models/Message.js';

const router = Router();
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  message: { error: 'Too many messages. Please try again in an hour.' },
});

router.post('/', limiter, async (req, res, next) => {
  try {
    const { name = '', email = '', topic = 'Other', message = '', website = '' } = req.body || {};
    if (website) return res.status(201).json({ ok: true }); // honeypot: pretend success to bots
    if (name.trim().length < 2) return res.status(400).json({ error: 'Please enter your name.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Please enter a valid email address.' });
    if (message.trim().length < 10) return res.status(400).json({ error: 'Your message should be at least 10 characters.' });
    await Message.create({ name, email, topic: String(topic).slice(0, 40), message, ip: req.ip });
    res.status(201).json({ ok: true });
  } catch (err) { next(err); }
});

export default router;
