import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import styles from "../styles/Login.module.css";

const Login = () => {
  const handleLoginSuccess = (response) => {
    console.log("Google OAuth Response:", response);
  };

  const handleLoginError = () => {
    alert("Google login failed. Please try again.");
  };

  return (
    <GoogleOAuthProvider clientId="xxxxx">
      <div className={styles.loginContainer}>
        <h1>Welcome to SaaS Communication</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
