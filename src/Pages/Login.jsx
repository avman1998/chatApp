import React from "react";

const login = () => {
  return (
    <div className="register">
      <div className="form-register">
        <div className="name">
          <p className="title">Aman's Chat App</p>
          <p className="regis-head">Login</p>
        </div>

        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <button className="signUp-btn">Sign In</button>
        <p className="have-account">
          You don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default login;
