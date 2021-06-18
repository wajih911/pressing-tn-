const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unisque: true },
  phone: Number,
  password: { type: String, required: true },
  adresse: { type: String },
  horaire: { type: String },

  role: {
    type: String,
    enum: ["user", "admin", "pressing"],
    default: "user",
  },
});
const User = mongoose.model("user", userSchema);
module.exports = User;
