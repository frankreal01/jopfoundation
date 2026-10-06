import { Router } from 'express';
import { getAuth, clerkClient } from '@clerk/express';
import { User, syncClerkUser, ROLES, FOCUS_AREAS } from '../models/User.js';

const router = Router();

// Every route below needs a valid Clerk session token (Authorization: Bearer <token>)
router.use((req, res, next) => {
  const { userId } = getAuth(req);
  if (!userId) return res.status(401).json({ error: 'Please sign in to continue.' });
  req.userId = userId;
  next();
});

// Create the MongoDB record the first time a signed-in user hits the API
router.post('/sync', async (req, res, next) => {
  try {
    const c = await clerkClient.users.getUser(req.userId);
    const user = await syncClerkUser({
      clerkId: c.id,
      email: c.emailAddresses.find((e) => e.id === c.primaryEmailAddressId)?.emailAddress || '',
      firstName: c.firstName,
      lastName: c.lastName,
      imageUrl: c.imageUrl,
    });
    res.json({ user });
  } catch (err) { next(err); }
});

router.get('/me', async (req, res, next) => {
  try {
    const user = await User.findOne({ clerkId: req.userId });
    if (!user) return res.status(404).json({ error: 'Account not found. Reload the dashboard.' });
    res.json({ user });
  } catch (err) { next(err); }
});

router.put('/me', async (req, res, next) => {
  try {
    const b = req.body || {};
    const profile = {
      role: ROLES.includes(b.role) ? b.role : '',
      location: String(b.location || '').slice(0, 80).trim(),
      focusAreas: Array.isArray(b.focusAreas) ? b.focusAreas.filter((a) => FOCUS_AREAS.includes(a)) : [],
      goal: String(b.goal || '').slice(0, 600).trim(),
      newsletter: Boolean(b.newsletter),
    };
    const user = await User.findOneAndUpdate({ clerkId: req.userId }, { $set: { profile } }, { new: true });
    if (!user) return res.status(404).json({ error: 'Account not found. Reload the dashboard.' });
    res.json({ user });
  } catch (err) { next(err); }
});

export default router;
