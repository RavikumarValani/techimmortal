import mongoose from "mongoose";

const statsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  project_count: { type: Number, required: true, default: 0, },
  member_count: { type: Number, required: true, default: 0, },
});

export default mongoose.model("Stats", statsSchema);
