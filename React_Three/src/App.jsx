import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import UserCard from './components/UserCard';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleDelete = (index) => {
    const updated = user.filter((_, i) => i !== index);
    setUser(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  if (loggedInUser) {
    return (
      <div style={styles.page}>
        {/* Top bar */}
        <div style={styles.topBar}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <img
              src={loggedInUser.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(loggedInUser.name)}&background=7c3aed&color=fff&bold=true`}
              alt={loggedInUser.name}
              style={{ width: "34px", height: "34px", borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(167,139,250,0.5)" }}
              onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(loggedInUser.name)}&background=7c3aed&color=fff&bold=true`; }}
            />
            <div>
              <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: "700", color: "#fff" }}>{loggedInUser.name}</p>
              <p style={{ margin: 0, fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>{loggedInUser.email}</p>
            </div>
          </div>
          <button onClick={() => setLoggedInUser(null)} style={styles.logoutBtn}
            onMouseOver={e => e.target.style.borderColor = "#a78bfa"}
            onMouseOut={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}>
            Logout
          </button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          <p style={styles.sectionLabel}>REGISTERED USERS</p>
          {user.length === 0 ? (
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.85rem" }}>No users yet.</p>
          ) : (
            <div style={styles.grid}>
              {user.map((elem, index) => (
                <UserCard key={index} user={elem} onDelete={() => handleDelete(index)} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return toggle
    ? <Login setToggle={setToggle} setLoggedInUser={setLoggedInUser} />
    : <Register setUser={setUser} user={user} setToggle={setToggle} />;
};

const styles = {
  page: {
    height: "100vh", width: "100vw", overflow: "hidden",
    background: "#0d0d0d", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    display: "flex", flexDirection: "column"
  },
  topBar: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "1rem 2rem", borderBottom: "1px solid rgba(255,255,255,0.06)"
  },
  logoutBtn: {
    padding: "0.45rem 1.1rem", borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.12)", background: "transparent",
    color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontWeight: "600",
    cursor: "pointer", transition: "border-color 0.2s ease"
  },
  content: { flex: 1, padding: "1.75rem 2rem", overflow: "hidden" },
  sectionLabel: {
    fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.12em",
    color: "#7c3aed", margin: "0 0 1.25rem"
  },
  grid: {
    display: "flex", flexWrap: "wrap", gap: "1rem"
  }
};

export default App;