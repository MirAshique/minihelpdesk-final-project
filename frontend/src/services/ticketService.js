import axios from "axios";

const API_URL = "https://minihelpdesk-backend-jdu5.onrender.com/api/tickets";

// Get all tickets or only active tickets
export const getTickets = async (activeOnly = false) => {
  const response = await axios.get(
    `${API_URL}?activeOnly=${activeOnly}`
  );

  return response.data.data;
};

// Create new ticket
export const createTicket = async (ticketData) => {
  const response = await axios.post(API_URL, ticketData);

  return response.data.data;
};

// Update existing ticket
export const updateTicket = async (id, ticketData) => {
  const response = await axios.put(`${API_URL}/${id}`, ticketData);

  return response.data.data;
};

// Delete ticket
export const deleteTicket = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  return response.data;
};

// Get dashboard statistics
export const getTicketStats = async () => {
  const response = await axios.get(`${API_URL}/stats`);

  return response.data.data;
};