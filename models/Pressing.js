const mongoose = require("mongoose");
const { Schema } = mongoose;

const pressingSchema = new Schema({
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  adresse: { type: String, required: true },
  horaire: { type: String, required: true },
  description: { type: String },
});

const Pressing = mongoose.model("pressing", pressingSchema);
module.exports = Pressing;
