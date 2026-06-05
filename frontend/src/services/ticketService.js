import axios from "axios";

const API_URL = "http://localhost:5000/api/tickets";

export const getTickets = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const createTicket = async (ticketData) => {
  const response = await axios.post(API_URL, ticketData);
  return response.data;
};

export const deleteTicket = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};