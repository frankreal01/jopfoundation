import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

export const ROLES = ['Young person', 'Student', 'Graduate', 'Professional', 'Mentor', 'Educator', 'Creator', 'Organisation / Partner'];
export const FOCUS_AREAS = ['Identity & Self-Development', 'Skills & Capability', 'Professional Development', 'Opportunity & Environment'];

const Counter = models.Counter || model('Counter', new Schema({ _id: String, seq: { type: Number, default: 0 } }));

const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, lowercase: true, trim: true, default: '' },
    firstName: String,
    lastName: String,
    imageUrl: String,
    memberNumber: { type: Number, unique: true, sparse: true },
    profile: {
      role: { type: String, enum: [...ROLES, ''], default: '' },
      location: { type: String, maxlength: 80, default: '' },
      focusAreas: [{ type: String, enum: FOCUS_AREAS }],
      goal: { type: String, maxlength: 600, default: '' },
      newsletter: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

export const User = models.User || model('User', userSchema);

async function nextMemberNumber() {
  const c = await Counter.findByIdAndUpdate('member', { $inc: { seq: 1 } }, { new: true, upsert: true });
  return c.seq;
}

/** Create or refresh a user from normalised Clerk data. Safe to call from webhook and /sync. */
export async function syncClerkUser({ clerkId, email, firstName, lastName, imageUrl }) {
  const fields = { email, firstName, lastName, imageUrl };
  const existing = await User.findOneAndUpdate({ clerkId }, { $set: fields }, { new: true });
  if (existing) return existing;
  try {
    return await User.create({ clerkId, ...fields, memberNumber: await nextMemberNumber() });
  } catch (err) {
    if (err.code === 11000) return User.findOne({ clerkId }); // created concurrently
    throw err;
  }
}
