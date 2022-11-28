import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/28/759097-preity-1st-choice-f-1.jpg"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/28/759097-preity-1st-choice-f-1.jpg"
          alt="message-img"
        />
      </div>
    </div>
  );
};

export default Message;
