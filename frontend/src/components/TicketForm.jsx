import { useState } from "react";

function TicketForm({ onCreateTicket, saving }) {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    priority: "Low",
    status: "Open",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.subject.trim() || !formData.description.trim()) {
      alert("Please enter subject and description");
      return;
    }

    await onCreateTicket(formData);

    setFormData({
      subject: "",
      description: "",
      priority: "Low",
      status: "Open",
    });
  };

  return (
    <section className="card">
      <h2>Create New Ticket</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter ticket subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={saving}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter ticket description"
            value={formData.description}
            onChange={handleChange}
            disabled={saving}
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              disabled={saving}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled={saving}
            >
              <option>Open</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>
          </div>
        </div>

        <button className="btn" type="submit" disabled={saving}>
          {saving ? "Saving..." : "Add Ticket"}
        </button>
      </form>
    </section>
  );
}

export default TicketForm;