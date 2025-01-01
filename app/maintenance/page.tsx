"use client";

import React, { useState } from "react";

const Maintenance = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@vertexstack.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Maintenance | Email",
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#1D2430",
        color: "#ffffff",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          width: "80%",
          backgroundColor: "#0f172a",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "20px",
            color: "#60a5fa",
            fontWeight: "bold",
          }}
        >
          We’ll Be Back Soon!
        </h1>
        <p
          style={{
            fontSize: "1rem",
            marginBottom: "20px",
            lineHeight: "1.5",
            color: "#94a3b8",
          }}
        >
          Our website is currently undergoing maintenance. Please send us a message if you have any urgent inquiries.
        </p>
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              style={{
                width: "80%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #334155",
                backgroundColor: "#1e293b",
                color: "#ffffff",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              style={{
                width: "80%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #334155",
                backgroundColor: "#1e293b",
                color: "#ffffff",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={4}
              style={{
                width: "80%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #334155",
                backgroundColor: "#1e293b",
                color: "#ffffff",
                fontSize: "1rem",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              backgroundColor: "#60a5fa",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#60a5fa")}
          >
            Send Message
          </button>
        </form>
        {success && (
          <p style={{ color: "#22c55e", fontSize: "1rem", marginTop: "10px" }}>
            Your message has been sent successfully!
          </p>
        )}
        {error && (
          <p style={{ color: "#ef4444", fontSize: "1rem", marginTop: "10px" }}>
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default Maintenance;
