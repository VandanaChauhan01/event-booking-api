const Booking = require("../models/Booking");
const Event = require("../models/Event");

exports.bookEvent = async (req, res) => {
  try {
    const { eventId, userName, seatsBooked } = req.body;

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.availableSeats < seatsBooked) {
      return res.status(400).json({ message: "Not enough seats" });
    }

    event.availableSeats -= seatsBooked;
    await event.save();

    const booking = await Booking.create({
      eventId,
      userName,
      seatsBooked
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};