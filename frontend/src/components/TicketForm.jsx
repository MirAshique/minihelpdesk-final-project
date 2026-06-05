function TicketForm() {
  return (
    <section className="card">
      <h2>Create New Ticket</h2>

      <div className="form-group">
        <label>Subject</label>
        <input type="text" placeholder="Enter ticket subject" />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea placeholder="Enter ticket description"></textarea>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Priority</label>
          <select>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select>
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>
        </div>
      </div>

      <button className="btn">Add Ticket</button>
    </section>
  );
}

export default TicketForm;