import { useState } from "react";

function TicketList({ tickets, loading, onDeleteTicket }) {
  const [search, setSearch] = useState("");
  const [ticketToDelete, setTicketToDelete] = useState(null);

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
      ticket.description.toLowerCase().includes(search.toLowerCase())
  );

  const getPriorityClass = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "high";
      case "medium":
        return "medium";
      case "low":
        return "low";
      default:
        return "low";
    }
  };

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "open":
        return "open";
      case "in progress":
        return "progress";
      case "closed":
        return "closed";
      default:
        return "open";
    }
  };

  const confirmDelete = () => {
    if (ticketToDelete) {
      onDeleteTicket(ticketToDelete._id);
      setTicketToDelete(null);
    }
  };

  return (
    <section className="card">
      <div className="ticket-header">
        <div>
          <h2>Support Tickets</h2>
          <p className="ticket-subtitle">
            Manage and monitor all support requests
          </p>
        </div>

        <div className="ticket-actions">
          <input
            type="text"
            placeholder="Search tickets..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <p>Loading tickets...</p>
      ) : filteredTickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        filteredTickets.map((ticket) => (
          <div className="ticket-card" key={ticket._id}>
            <div className="ticket-top">
              <div>
                <h3>{ticket.subject}</h3>
                <p>{ticket.description}</p>

                <div className="badges">
                  <span className={`badge ${getPriorityClass(ticket.priority)}`}>
                    {ticket.priority} Priority
                  </span>

                  <span className={`badge ${getStatusClass(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </div>
              </div>

              <div className="ticket-buttons">
                <button
                  className="delete-btn"
                  onClick={() => setTicketToDelete(ticket)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {ticketToDelete && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <div className="modal-icon">⚠️</div>

            <h2>Delete Ticket?</h2>

            <p>
              Are you sure you want to delete{" "}
              <strong>{ticketToDelete.subject}</strong>?
            </p>

            <p className="modal-warning">
              This action cannot be undone.
            </p>

            <div className="modal-actions">
              <button
                className="cancel-modal-btn"
                onClick={() => setTicketToDelete(null)}
              >
                Cancel
              </button>

              <button
                className="confirm-delete-btn"
                onClick={confirmDelete}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default TicketList;