const mongoose = require("mongoose");
const { Schema } = mongoose;

const volumeSchema = new Schema({
  length: Number,
  width: Number,
  height: Number
});

module.exports = volumeSchema;
