const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commandeSchema = new Schema({
  ClientName: String,
  Clientphone: { type: Number, required: true },
  number_of_parts: { type: Number, required: true },
  availability_date: { type: String, required: true },
  adress: { type: String, required: true },
  createdby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    // required: true,
  },
  CreationDate: { type: Date, default: Date.now() },
  pressingId: String,
});

module.exports = mongoose.model("commande", commandeSchema);
