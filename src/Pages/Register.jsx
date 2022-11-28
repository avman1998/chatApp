import React from "react";
import avatar from "../img/addAvatar.png";
const Register = () => {
  return (
    <div className="register">
      <div className="form-register">
        <div className="name">
          <p className="title">Chat App</p>
          <p className="regis-head">Register</p>
        </div>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <label htmlFor="avatar" className="add-avatar">
          <img src={avatar} alt="" />
          <p>Add an avatar</p>
        </label>
        <input type="file" style={{ display: "none" }} id="avatar" />
        <button className="signUp-btn">Sign up</button>
        <p className="have-account">
          You do have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
