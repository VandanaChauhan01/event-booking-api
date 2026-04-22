const Event = require("../models/Event");

// CREATE EVENT
const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET EVENTS (Advanced)
const getEvents = async (req, res) => {
  try {
    const { location, date, page = 1, limit = 5 } = req.query;

    let query = {};

    if (location) query.location = location;
    if (date) query.date = date;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const events = await Event.find(query)
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const total = await Event.countDocuments(query);

    res.status(200).json({
      total,
      page: pageNumber,
      limit: limitNumber,
      events,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ VERY IMPORTANT EXPORT
module.exports = { createEvent, getEvents };