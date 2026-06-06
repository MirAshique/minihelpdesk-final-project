import { useEffect, useState } from "react";

function TicketForm({
  onCreateTicket,
  onUpdateTicket,
  editingTicket,
  onCancelEdit,
  saving,
}) {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    priority: "Low",
    status: "Open",
  });

  useEffect(() => {
    if (editingTicket) {
      setFormData({
        subject: editingTicket.subject || "",
        description: editingTicket.description || "",
        priority: editingTicket.priority || "Low",
        status: editingTicket.status || "Open",
      });
    }
  }, [editingTicket]);

  const resetForm = () => {
    setFormData({
      subject: "",
      description: "",
      priority: "Low",
      status: "Open",
    });
  };

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

    if (editingTicket) {
      await onUpdateTicket(editingTicket._id, formData);
    } else {
      await onCreateTicket(formData);
    }

    resetForm();
  };

  const handleCancel = () => {
    resetForm();
    onCancelEdit();
  };

  return (
    <section className="card">
      <h2>{editingTicket ? "✏️ Edit Ticket" : "➕ Create New Ticket"}</h2>

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
          {saving
            ? "Saving..."
            : editingTicket
            ? "Update Ticket"
            : "Add Ticket"}
        </button>

        {editingTicket && (
          <button
            className="cancel-edit-btn"
            type="button"
            onClick={handleCancel}
            disabled={saving}
          >
            Cancel Edit
          </button>
        )}
      </form>
    </section>
  );
}

export default TicketForm;