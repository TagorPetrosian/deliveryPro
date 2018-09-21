const mongoose = require("mongoose");
const { Schema } = mongoose;
const AddressSchema = require("./Address");
const VolumeSchema = require("./Volume");

const orderSchema = new Schema({
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  origin: AddressSchema,
  destination: AddressSchema,
  recieved: { type: Boolean, default: false },
  delivered: { type: Boolean, default: false },
  returned: { type: Boolean, default: false },
  damaged: { type: Boolean, default: false },
  lost: { type: Boolean, default: false },
  volume: VolumeSchema,
  dateOrdered: Date,
  dateRecieved: Date,
  dateDelivered: Date
});

mongoose.model("Order", orderSchema);

module.exports = orderSchema;
