import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, lowercase: true, trim: true },
    topic: { type: String, default: 'Other' },
    message: { type: String, required: true, maxlength: 2000 },
    ip: String,
  },
  { timestamps: true }
);

export const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);
