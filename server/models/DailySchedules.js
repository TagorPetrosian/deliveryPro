const mongoose = require("mongoose");
const { Schema } = mongoose;
const SchedulesSchema = require("./Schedule");

const DailySchedulesSchema = new Schema({
  dailySchedules: [SchedulesSchema],
  dateCreated: Date
});

mongoose.model("DailySchedules", SchedulesSchema);

module.exports = DailySchedulesSchema;
