import mongoose, { Schema, Model, Document } from 'mongoose'

const URLSchema = new Schema({
  longUrl: { type: String, required: true, unique: true },
  shortUrl: { type: String, required: true, unique: true },
}, { timestamps: true })

export interface IURL extends Document {
  longUrl: string
  shortUrl: string
}

const URL: Model<IURL> = mongoose.model<IURL>('URL', URLSchema)

export default URL