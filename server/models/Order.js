const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  title: String
  // _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("orders", orderSchema);
