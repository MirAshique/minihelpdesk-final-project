import { useEffect, useState } from "react";

import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";
import Footer from "../components/Footer";
import WelcomeCard from "../components/WelcomeCard";

import {
  getTickets,
  createTicket,
  deleteTicket,
  getTicketStats,
} from "../services/ticketService";

function Home() {
  const [tickets, setTickets] = useState([]);
  const [stats, setStats] = useState(null);
  const [activeOnly, setActiveOnly] = useState(false);

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchTickets = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTickets(activeOnly);
      setTickets(data);
    } catch (err) {
      setError("Failed to load tickets. Please check backend server.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const data = await getTicketStats();
      setStats(data);
    } catch (err) {
      console.error("Failed to load stats:", err);
    }
  };

  useEffect(() => {
    fetchTickets();
    fetchStats();
  }, [activeOnly]);

  const handleCreateTicket = async (ticketData) => {
    try {
      setSaving(true);
      setError("");

      await createTicket(ticketData);

      await fetchTickets();
      await fetchStats();
    } catch (err) {
      setError("Failed to create ticket. Please try again.");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteTicket = async (id) => {
    try {
      setError("");

      await deleteTicket(id);

      await fetchTickets();
      await fetchStats();
    } catch (err) {
      setError("Failed to delete ticket. Please try again.");
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <WelcomeCard />

      <div className="container">
        <StatsCards stats={stats} />

        <div className="filter-row">
          <label>
            <input
              type="checkbox"
              checked={activeOnly}
              onChange={(e) => setActiveOnly(e.target.checked)}
            />
            {" "}Active Only
          </label>
        </div>

        {error && <p className="error-message">{error}</p>}

        <main className="dashboard-grid">
          <TicketForm onCreateTicket={handleCreateTicket} saving={saving} />

          <TicketList
            tickets={tickets}
            loading={loading}
            onDeleteTicket={handleDeleteTicket}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Home;