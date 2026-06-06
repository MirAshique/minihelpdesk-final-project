function Header() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="brand">
          <span className="logo">🎫</span>

          <div>
            <h1>MiniHelpDesk</h1>
            <p>Ticket Management System</p>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="header-content">
        <h2>Ticket Management Dashboard</h2>

        <p>
          Track, manage and resolve support tickets efficiently.
        </p>

        <p>
          Developed by Mir Ashique Hussain Talpur & Afaque Ahmed
        </p>

        <div className="status-badge">
          System Online
        </div>
      </div>
    </header>
  );
}

export default Header;