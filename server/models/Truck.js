const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose;
const OrderSchema = require("./Order");

const truckSchema = new Schema({
  drops: [OrderSchema],
  pickups: [OrderSchema]
});

mongoose.model("trucks", truckSchema);
