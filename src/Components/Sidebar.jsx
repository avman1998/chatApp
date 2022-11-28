import React from "react";
import Navbar from "./Navbar";
import Chats from "./Chats";
import Search from "./Search";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}
