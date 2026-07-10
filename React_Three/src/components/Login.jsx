import React, { useState } from "react";

const Login = ({ setToggle, setLoggedInUser }) => {
    const [formData, setFormData] = useState({ email: "", pass: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const stored = JSON.parse(localStorage.getItem("users")) || [];
        const matched = stored.find(u => u.email === formData.email && u.pass === formData.pass);
        if (matched) setLoggedInUser(matched);
        else setError("Invalid email or password.");
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.accent} />
                <div style={styles.inner}>

                    <div style={{ marginBottom: "1.75rem" }}>
                        <p style={styles.eyebrow}>WELCOME BACK</p>
                        <h1 style={styles.heading}>Sign In</h1>
                    </div>

                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div>
                            <label style={styles.label}>Email</label>
                            <input required name="email" value={formData.email} onChange={handleChange}
                                type="email" placeholder="john@email.com" style={styles.input}
                                onFocus={e => e.target.style.borderColor = "#a78bfa"}
                                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                        </div>

                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                                <label style={styles.label}>Password</label>
                                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>Forgot?</span>
                            </div>
                            <input required name="pass" value={formData.pass} onChange={handleChange}
                                type="password" placeholder="••••••••" style={styles.input}
                                onFocus={e => e.target.style.borderColor = "#a78bfa"}
                                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                        </div>

                        {error && (
                            <div style={styles.errorBox}>{error}</div>
                        )}

                        <button type="submit" style={styles.btn}
                            onMouseOver={e => e.target.style.opacity = "0.88"}
                            onMouseOut={e => e.target.style.opacity = "1"}>
                            Sign In →
                        </button>
                    </form>

                    <p style={styles.footer}>
                        No account?{" "}
                        <span onClick={() => setToggle(p => !p)} style={styles.link}>Create one</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        height: "100vh", width: "100vw", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#0d0d0d", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    },
    card: {
        display: "flex", width: "400px", borderRadius: "20px",
        background: "#111111", border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 32px 64px rgba(0,0,0,0.6)", overflow: "hidden"
    },
    accent: { width: "3px", flexShrink: 0, background: "linear-gradient(180deg, #7c3aed 0%, #a78bfa 100%)" },
    inner: { flex: 1, padding: "2.25rem 1.75rem" },
    eyebrow: { fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.12em", color: "#7c3aed", margin: 0 },
    heading: { fontSize: "1.7rem", fontWeight: "800", color: "#fff", margin: "0.2rem 0 0" },
    form: { display: "flex", flexDirection: "column", gap: "1.1rem" },
    label: { display: "block", fontSize: "0.72rem", fontWeight: "600", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" },
    input: {
        width: "100%", boxSizing: "border-box", borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)",
        padding: "0.65rem 0.9rem", color: "#fff", fontSize: "0.88rem",
        outline: "none", transition: "border-color 0.2s ease"
    },
    errorBox: {
        padding: "0.6rem 0.9rem", borderRadius: "10px",
        background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)",
        color: "#fca5a5", fontSize: "0.8rem", textAlign: "center"
    },
    btn: {
        marginTop: "0.25rem", width: "100%", padding: "0.75rem",
        borderRadius: "10px", border: "none",
        background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
        color: "#fff", fontSize: "0.9rem", fontWeight: "700",
        cursor: "pointer", transition: "opacity 0.2s ease"
    },
    footer: { marginTop: "1.5rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.3)", textAlign: "center" },
    link: { color: "#a78bfa", cursor: "pointer", fontWeight: "600" }
};

export default Login;