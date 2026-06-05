import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <div className="container">
        <StatsCards />

        <main className="dashboard-grid">
          <TicketForm />
          <TicketList />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Home;