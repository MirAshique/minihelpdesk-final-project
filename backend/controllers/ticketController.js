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

// GET /api/tickets/stats
const getTicketStats = async (req, res) => {
  try {
    const total = await Ticket.countDocuments();
    const open = await Ticket.countDocuments({ status: "Open" });
    const inProgress = await Ticket.countDocuments({ status: "In Progress" });
    const closed = await Ticket.countDocuments({ status: "Closed" });
    const highPriority = await Ticket.countDocuments({ priority: "High" });

    res.status(200).json({
      success: true,
      data: {
        total,
        open,
        inProgress,
        closed,
        highPriority,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch ticket statistics",
    });
  }
};

// POST /api/tickets
const createTicket = async (req, res) => {
  try {
    const { subject, description, priority, status } = req.body;

    if (!subject || !description) {
      return res.status(400).json({
        success: false,
        message: "Subject and description are required",
      });
    }

    const allowedPriorities = ["Low", "Medium", "High"];
    const allowedStatuses = ["Open", "In Progress", "Closed"];

    if (priority && !allowedPriorities.includes(priority)) {
      return res.status(400).json({
        success: false,
        message: "Invalid priority value",
      });
    }

    if (status && !allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

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

// PUT /api/tickets/:id
const updateTicket = async (req, res) => {
  try {
    const { subject, description, priority, status } = req.body;

    const allowedPriorities = ["Low", "Medium", "High"];
    const allowedStatuses = ["Open", "In Progress", "Closed"];

    if (priority && !allowedPriorities.includes(priority)) {
      return res.status(400).json({
        success: false,
        message: "Invalid priority value",
      });
    }

    if (status && !allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { subject, description, priority, status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Ticket updated successfully",
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update ticket",
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
  getTicketStats,
  createTicket,
  updateTicket,
  deleteTicket,
};