import React, { useState } from "react";

const UserCard = ({ user, onDelete }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div style={styles.card}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>

            <img
                src={!imgError && user.image ? user.image : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=7c3aed&color=fff&bold=true`}
                alt={user.name}
                onError={() => setImgError(true)}
                style={styles.avatar}
            />

            <h3 style={styles.name}>{user.name}</h3>
            <p style={styles.email}>{user.email}</p>

            <button onClick={onDelete} style={styles.deleteBtn}
                onMouseOver={e => e.target.style.opacity = "0.8"}
                onMouseOut={e => e.target.style.opacity = "1"}>
                Remove
            </button>
        </div>
    );
};

const styles = {
    card: {
        width: "180px", borderRadius: "16px",
        background: "#161616", border: "1px solid rgba(255,255,255,0.07)",
        padding: "1.25rem 1rem", textAlign: "center",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    },
    avatar: {
        width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover",
        border: "2px solid rgba(167,139,250,0.5)"
    },
    name: { margin: 0, fontSize: "0.9rem", fontWeight: "700", color: "#fff" },
    email: { margin: 0, fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", wordBreak: "break-all" },
    deleteBtn: {
        marginTop: "0.6rem", padding: "0.45rem 1rem", borderRadius: "8px",
        border: "1px solid rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.1)",
        color: "#f87171", fontSize: "0.78rem", fontWeight: "600",
        cursor: "pointer", transition: "opacity 0.2s ease"
    }
};

export default UserCard;