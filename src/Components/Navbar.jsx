import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/28/759097-preity-1st-choice-f-1.jpg"
          alt="dp"
        />
        <p>Aman Verma</p>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
