import mongoose from 'mongoose';

const URLSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const URL = mongoose.models.URL || mongoose.model('URL', URLSchema);

export default URL;