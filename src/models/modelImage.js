import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  path: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default model('modelImage', schema)
