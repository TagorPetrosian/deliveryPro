const mongoose = require("mongoose");
const { Schema } = mongoose;

const stopSchema = new Schema({
  _order: { type: Schema.Types.ObjectId, ref: "Order" },
  location: String,
  sort: String,
  description: String,
  volume: Number
});

module.exports = stopSchema;
