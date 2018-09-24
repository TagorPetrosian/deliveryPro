const mongoose = require("mongoose");
const { Schema } = mongoose;
// const AddressSchema = require("./Address");
// const VolumeSchema = require("./Volume");

const orderSchema = new Schema({
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  origin: String,
  destination: String,
  recieved: { type: Boolean, default: false },
  delivered: { type: Boolean, default: false },
  returned: { type: Boolean, default: false },
  damaged: { type: Boolean, default: false },
  lost: { type: Boolean, default: false },
  volume: String,
  dateOrdered: Date,
  dateRecieved: Date,
  dateDelivered: Date
});

mongoose.model("Order", orderSchema);

module.exports = orderSchema;
