const mongoose = require("mongoose");
const { Schema } = mongoose;
const OrderSchema = require("./Order");
const AddressSchema = require("./Address");

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
  role: String,
  company: String,
  address: AddressSchema,
  contactPhone: String, // should be num? + how to validate israeli phone
  orders: [OrderSchema]
});

mongoose.model("users", userSchema);
