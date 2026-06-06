function Header() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header-content">
        <span className="logo">🎫</span>

        <h1>MiniHelpDesk</h1>

        <p>
          Track, manage and resolve support tickets efficiently.
        </p>

        <p>
          Developed by Mir Ashique Hussain Talpur & Afaque Ahmed
        </p>

        <div className="status-badge">
          System Online
        </div>

        <button
          className="btn"
          onClick={handleLogout}
          style={{ marginTop: "15px" }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;