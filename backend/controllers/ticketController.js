const Ticket = require("../models/Ticket");

// GET /api/tickets
const getTickets = async (req, res) => {
  try {
    const { activeOnly } = req.query;

    let filter = {};

    if (activeOnly === "true") {
      filter.status = { $ne: "Closed" };
    }

    const tickets = await Ticket.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tickets",
    });
  }
};
// POST /api/tickets
const createTicket = async (req, res) => {
  try {
    const { subject, description, priority, status } = req.body;

    const ticket = await Ticket.create({
      subject,
      description,
      priority,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Ticket created successfully",
      data: ticket,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create ticket",
    });
  }
};

// DELETE /api/tickets/:id
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Ticket deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete ticket",
    });
  }
};

module.exports = {
  getTickets,
  createTicket,
  deleteTicket,
};