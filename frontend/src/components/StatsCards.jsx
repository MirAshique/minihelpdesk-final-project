function StatsCards() {
  return (
    <section className="stats-grid">
      <div className="stat-card">
        <h3>Total Tickets</h3>
        <p>10</p>
      </div>

      <div className="stat-card">
        <h3>Open</h3>
        <p>5</p>
      </div>

      <div className="stat-card">
        <h3>In Progress</h3>
        <p>3</p>
      </div>

      <div className="stat-card">
        <h3>Closed</h3>
        <p>2</p>
      </div>
    </section>
  );
}

export default StatsCards;