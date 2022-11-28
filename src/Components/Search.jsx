import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find user" />
      </div>
      <div className="userChat">
        <img
          src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/28/759097-preity-1st-choice-f-1.jpg"
          alt="user-pic"
        />
        <div className="user-info">
          <span>Aman</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
