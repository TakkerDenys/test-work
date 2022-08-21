const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    user_id: String,
    title: String,
    description: String,
    start: Date,
    end: Date
});

module.exports = mongoose.model("events", eventSchema);