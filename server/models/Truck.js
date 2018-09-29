const mongoose = require("mongoose");
const { Schema } = mongoose;
const OrderSchema = require("./Order");

const truckSchema = new Schema({
  model: String,
  volume: Number,
  drops: [OrderSchema],
  pickups: [OrderSchema],
  dateAdded: Date
});

mongoose.model("Truck", truckSchema);

module.exports = truckSchema;
