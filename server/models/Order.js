const mongoose = require("mongoose");
const { Schema } = mongoose;
const AdressSchema = require("./Address");
const VolumeSchema = require("./Volume");

const orderSchema = new Schema({
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  origin: AdressSchema,
  destination: AdressSchema,
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
