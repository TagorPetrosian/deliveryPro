const mongoose = require("mongoose");
const { Schema } = mongoose;

//add coordinates?
const addressSchema = new Schema({
  city: String,
  street: String,
  buildingNum: Number,
  floor: Number,
  entrance: String
});

module.exports = addressSchema;
