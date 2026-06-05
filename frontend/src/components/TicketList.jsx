function TicketList() {
  return (
    <section className="card">
      <div className="filter-row">
        <h2>Tickets</h2>

        <label className="checkbox-label">
          <input type="checkbox" />
          Active Only
        </label>
      </div>

      <div className="ticket-card">
        <div className="ticket-top">
          <div>
            <h3>Printer Not Working</h3>
            <p>Printer in Lab is offline.</p>

            <div className="badges">
              <span className="badge high">High</span>
              <span className="badge open">Open</span>
            </div>
          </div>

          <button className="delete-btn">Delete</button>
        </div>
      </div>

      <div className="ticket-card">
        <div className="ticket-top">
          <div>
            <h3>Internet Issue</h3>
            <p>Internet is slow in Lab 2.</p>

            <div className="badges">
              <span className="badge medium">Medium</span>
              <span className="badge progress">In Progress</span>
            </div>
          </div>

          <button className="delete-btn">Delete</button>
        </div>
      </div>

      <div className="ticket-card">
        <div className="ticket-top">
          <div>
            <h3>Software Installation</h3>
            <p>Install VS Code in Lab 3.</p>

            <div className="badges">
              <span className="badge low">Low</span>
              <span className="badge closed">Closed</span>
            </div>
          </div>

          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </section>
  );
}

export default TicketList;