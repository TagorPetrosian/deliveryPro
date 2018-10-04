const mongoose = require("mongoose");
const { Schema } = mongoose;
const SchedulesSchema = require("./Schedule");

const DailySchedulesSchema = new Schema({
  dailySchedules: [SchedulesSchema],
  dateCreated: String
});

mongoose.model("DailySchedule", SchedulesSchema);

module.exports = DailySchedulesSchema;
