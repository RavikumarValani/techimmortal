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
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("jobRequest", jobRequestSchema);
