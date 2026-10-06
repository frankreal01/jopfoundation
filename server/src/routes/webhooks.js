import express, { Router } from 'express';
import { Webhook } from 'svix';
import { User, syncClerkUser } from '../models/User.js';

const router = Router();

// Mounted BEFORE express.json() so the raw body is available for signature checking.
router.post('/clerk', express.raw({ type: 'application/json' }), async (req, res) => {
  if (!process.env.CLERK_WEBHOOK_SECRET) return res.status(503).json({ error: 'Webhook secret not configured' });
  let evt;
  try {
    evt = new Webhook(process.env.CLERK_WEBHOOK_SECRET).verify(req.body.toString(), {
      'svix-id': req.headers['svix-id'],
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-signature': req.headers['svix-signature'],
    });
  } catch {
    return res.status(400).json({ error: 'Invalid signature' });
  }

  try {
    const d = evt.data;
    if (evt.type === 'user.created' || evt.type === 'user.updated') {
      await syncClerkUser({
        clerkId: d.id,
        email: d.email_addresses?.find((e) => e.id === d.primary_email_address_id)?.email_address || '',
        firstName: d.first_name,
        lastName: d.last_name,
        imageUrl: d.image_url,
      });
    } else if (evt.type === 'user.deleted') {
      await User.deleteOne({ clerkId: d.id });
    }
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
});

export default router;
