import mongoose from "mongoose";

const jobRequestSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    trim: true,
  },
  careerId: {
    type: mongoose.Schema.Types.ObjectId, // Matches the type of career._id
    required: true,
    ref: 'career',
  },
  myFile: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    enum: [1, 0, 2],
    default: 2,
  },
  comment: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("jobRequest", jobRequestSchema);
