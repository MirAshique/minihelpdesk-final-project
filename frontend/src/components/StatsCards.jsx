function StatsCards({ stats }) {
  return (
    <section className="stats-grid">
      <div className="stat-card stat-total">
        <span className="stat-icon">🎫</span>
        <div>
          <h3>Total Tickets</h3>
          <p>{stats?.total || 0}</p>
        </div>
      </div>

      <div className="stat-card stat-open">
        <span className="stat-icon">🟢</span>
        <div>
          <h3>Open</h3>
          <p>{stats?.open || 0}</p>
        </div>
      </div>

      <div className="stat-card stat-progress">
        <span className="stat-icon">🟣</span>
        <div>
          <h3>In Progress</h3>
          <p>{stats?.inProgress || 0}</p>
        </div>
      </div>

      <div className="stat-card stat-closed">
        <span className="stat-icon">✅</span>
        <div>
          <h3>Closed</h3>
          <p>{stats?.closed || 0}</p>
        </div>
      </div>
    </section>
  );
}

export default StatsCards;