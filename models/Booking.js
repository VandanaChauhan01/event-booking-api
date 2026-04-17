const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  },
  userName: { type: String, required: true },
  seatsBooked: { type: Number, required: true }
});

module.exports = mongoose.model("Booking", bookingSchema);