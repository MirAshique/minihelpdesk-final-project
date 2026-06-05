function TicketList() {
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
          />

          <label className="checkbox-label">
            <input type="checkbox" />
            Active Only
          </label>
        </div>
      </div>

      {/* Ticket 1 */}
      <div className="ticket-card">
        <div className="ticket-top">
          <div>
            <h3>Printer Not Working</h3>
            <p>
              Printer in Lab 1 is currently offline and students are unable
              to print documents.
            </p>

            <div className="badges">
              <span className="badge high">High Priority</span>
              <span className="badge open">Open</span>
            </div>
          </div>

          <div className="ticket-buttons">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      </div>

      {/* Ticket 2 */}
      <div className="ticket-card">
        <div className="ticket-top">
          <div>
            <h3>Internet Issue</h3>
            <p>
              Internet speed is very slow in Lab 2 causing delays during
              practical sessions.
            </p>

            <div className="badges">
              <span className="badge medium">Medium Priority</span>
              <span className="badge progress">In Progress</span>
            </div>
          </div>

          <div className="ticket-buttons">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      </div>

      {/* Ticket 3 */}
      <div className="ticket-card">
        <div className="ticket-top">
          <div>
            <h3>Software Installation</h3>
            <p>
              Install Visual Studio Code and Node.js in Lab 3 systems.
            </p>

            <div className="badges">
              <span className="badge low">Low Priority</span>
              <span className="badge closed">Closed</span>
            </div>
          </div>

          <div className="ticket-buttons">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TicketList;