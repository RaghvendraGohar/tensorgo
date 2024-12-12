import React, { useState } from "react";
import styles from "../styles/ComposeEmail.module.css";
import { sendEmail } from "../services/api";

const ComposeEmail = () => {
  const [form, setForm] = useState({ to: "", subject: "", body: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(form);
      alert("Email sent successfully!");
    } catch (error) {
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <div className={styles.composeContainer}>
      <h1>Compose Email</h1>
      <form onSubmit={handleSubmit} className={styles.composeForm}>
        <input
          type="email"
          name="to"
          placeholder="Recipient's Email"
          value={form.to}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="body"
          placeholder="Email Body"
          value={form.body}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.sendButton}>Send Email</button>
      </form>
    </div>
  );
};

export default ComposeEmail;
