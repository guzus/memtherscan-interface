import React from "react";
export default function Footer() {
  return (
    <div className="bg-dark text-center text-white">
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "white" }}>
        <a href="https://twitter.com/AirdropBrokers">
          <div style={{ fontSize: "40px", color: "pink" }}>twitter</div>
        </a>
        <a href="https://discord.gg/K4nFPbPHm">
          <div style={{ fontSize: "40px", color: "pink" }}>discord</div>
        </a>

        <p style={{ fontSize: "15px", color: "gray" }}>© 2023 Memtherscan</p>
      </div>
    </div>
  );
}
