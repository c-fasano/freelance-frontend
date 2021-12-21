import React from "react";
import LoginModal from "react-login-modal";
 
const AuthModal = () => {
  const handleSignup = (username, email, password) => {};
  const handleLogin = (username, password) => {}

  return (
    <LoginModal
        handleSignup={handleSignup}
        handleLogin={handleLogin}
    />
  )
}

export default AuthModal


