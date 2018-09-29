const mongoose = require("mongoose");
const { Schema } = mongoose;

const zoneSchema = new Schema({
  center: String,
  radius: Number,
  dateAdded: Date
});

mongoose.model("Zone", zoneSchema);

module.exports = zoneSchema;
