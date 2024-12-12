import React, { useEffect, useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { getCommunicationHistory } from "../services/api";

const Dashboard = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await getCommunicationHistory();
      setEmails(response);
    };

    fetchEmails();
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <h1>Communication History</h1>
      <div className={styles.emailList}>
        {emails.map((email, index) => (
          <div key={index} className={styles.emailItem}>
            <h2>{email.subject}</h2>
            <p>To: {email.to}</p>
            <p>{email.body}</p>
            <p className={styles.timestamp}>{new Date(email.sentAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
      <a href="/compose" className={styles.composeButton}>Compose Email</a>
    </div>
  );
};

export default Dashboard;
