const mongoose = require("mongoose");
const { Schema } = mongoose;
const AddressSchema = require("./Address");
const VolumeSchema = require("./Volume");

const orderSchema = new Schema({
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  origin: AddressSchema,
  destination: AddressSchema,
  recieved: Boolean,
  delivered: Boolean,
  returned: Boolean,
  damaged: Boolean,
  lost: Boolean,
  volume: VolumeSchema,
  dateOrdered: Date,
  dateRecieved: Date,
  dateDelivered: Date
});

mongoose.model("Order", orderSchema);

module.exports = orderSchema;
