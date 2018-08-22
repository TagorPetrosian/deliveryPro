const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose;
const OrderSchema = require("./Order");

const warehouseSchema = new Schema({
  orders: [OrderSchema]
});

mongoose.model("warehouse", warehouseSchema);
