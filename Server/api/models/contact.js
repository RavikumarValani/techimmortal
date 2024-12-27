import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: false,
    trim: true,
  },
  company: {
    type: String,
    required: false,
  },
  status: {
    type: Number,
    enum: [1, 0, 2],
    default: 2,
  },
  message: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("contact", contactSchema);
