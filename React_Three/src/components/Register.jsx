import React, { useState } from "react";

const Register = ({ setToggle, setUser, user }) => {
    const [formData, setFormData] = useState({ name: "", email: "", pass: "", image: "" });
    const [imgError, setImgError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "image") setImgError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUsers = [...user, formData];
        setUser(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setFormData({ name: "", email: "", pass: "", image: "" });
        setToggle((prev) => !prev);
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                {/* Left accent strip */}
                <div style={styles.accent} />

                <div style={styles.inner}>
                    {/* Header */}
                    <div style={{ marginBottom: "1.5rem" }}>
                        <p style={styles.eyebrow}>GET STARTED</p>
                        <h1 style={styles.heading}>Create Account</h1>
                    </div>

                    <form onSubmit={handleSubmit} style={styles.form}>

                        {/* Avatar preview + image URL */}
                        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                            <div style={styles.avatar}>
                                {formData.image && !imgError ? (
                                    <img
                                        src={formData.image}
                                        alt="avatar"
                                        onError={() => setImgError(true)}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                                    />
                                ) : (
                                    <span style={{ fontSize: "1.4rem", opacity: 0.5 }}>👤</span>
                                )}
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={styles.label}>Photo URL</label>
                                <input
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    type="url"
                                    placeholder="https://example.com/photo.jpg"
                                    style={styles.input}
                                    onFocus={e => e.target.style.borderColor = "#a78bfa"}
                                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                                />
                                {imgError && <p style={styles.errorText}>Invalid image URL</p>}
                            </div>
                        </div>

                        {/* Name */}
                        <div>
                            <label style={styles.label}>Full Name</label>
                            <input required name="name" value={formData.name} onChange={handleChange}
                                type="text" placeholder="John Doe" style={styles.input}
                                onFocus={e => e.target.style.borderColor = "#a78bfa"}
                                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                        </div>

                        {/* Email */}
                        <div>
                            <label style={styles.label}>Email</label>
                            <input required name="email" value={formData.email} onChange={handleChange}
                                type="email" placeholder="john@email.com" style={styles.input}
                                onFocus={e => e.target.style.borderColor = "#a78bfa"}
                                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                        </div>

                        {/* Password */}
                        <div>
                            <label style={styles.label}>Password</label>
                            <input required name="pass" value={formData.pass} onChange={handleChange}
                                type="password" placeholder="••••••••" style={styles.input}
                                onFocus={e => e.target.style.borderColor = "#a78bfa"}
                                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                        </div>

                        <button type="submit" style={styles.btn}
                            onMouseOver={e => e.target.style.opacity = "0.88"}
                            onMouseOut={e => e.target.style.opacity = "1"}>
                            Create Account →
                        </button>
                    </form>

                    <p style={styles.footer}>
                        Already have an account?{" "}
                        <span onClick={() => setToggle(p => !p)} style={styles.link}>Sign In</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const base = {
    page: {
        height: "100vh", width: "100vw", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#0d0d0d", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    },
    card: {
        display: "flex", position: "relative", overflow: "hidden",
        width: "420px", borderRadius: "20px",
        background: "#111111", border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 32px 64px rgba(0,0,0,0.6)"
    },
    accent: {
        width: "3px", flexShrink: 0,
        background: "linear-gradient(180deg, #7c3aed 0%, #a78bfa 100%)"
    },
    inner: { flex: 1, padding: "2rem 1.75rem" },
    eyebrow: { fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.12em", color: "#7c3aed", margin: 0 },
    heading: { fontSize: "1.6rem", fontWeight: "800", color: "#fff", margin: "0.2rem 0 0" },
    form: { display: "flex", flexDirection: "column", gap: "1rem" },
    label: { display: "block", fontSize: "0.72rem", fontWeight: "600", color: "rgba(255,255,255,0.4)", marginBottom: "0.35rem", letterSpacing: "0.05em", textTransform: "uppercase" },
    input: {
        width: "100%", boxSizing: "border-box", borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)",
        padding: "0.65rem 0.9rem", color: "#fff", fontSize: "0.88rem",
        outline: "none", transition: "border-color 0.2s ease"
    },
    avatar: {
        width: "52px", height: "52px", flexShrink: 0, borderRadius: "50%",
        border: "1.5px solid rgba(167,139,250,0.4)", background: "rgba(255,255,255,0.04)",
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"
    },
    btn: {
        marginTop: "0.25rem", width: "100%", padding: "0.75rem",
        borderRadius: "10px", border: "none",
        background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
        color: "#fff", fontSize: "0.9rem", fontWeight: "700",
        cursor: "pointer", transition: "opacity 0.2s ease",
        letterSpacing: "0.02em"
    },
    footer: { marginTop: "1.25rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.3)", textAlign: "center" },
    link: { color: "#a78bfa", cursor: "pointer", fontWeight: "600" },
    errorText: { color: "#f87171", fontSize: "0.72rem", marginTop: "0.3rem" }
};

const styles = base;

export default Register;