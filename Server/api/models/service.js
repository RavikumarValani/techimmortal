import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true, },
  slug: { type: String, required: true, },
  sort_order: { type: Number, default: 0, },
  date: { type: Date, default: Date.now, },
});

export default mongoose.model("Service", serviceSchema);
