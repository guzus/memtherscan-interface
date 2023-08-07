import React from "react";
import { AiOutlineGlobal, AiFillTwitterCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="bg-dark text-center text-white">
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "white" }}>
        <a href="https://twitter.com/AirdropBrokers">
          <AiFillTwitterCircle
            style={{ fontSize: "40px", color: "pink" }}
          ></AiFillTwitterCircle>
        </a>
        <a href="https://discord.gg/K4nFPbPHm">
          <AiOutlineGlobal
            style={{ fontSize: "40px", color: "pink" }}
          ></AiOutlineGlobal>
        </a>

        <p style={{ fontSize: "15px", color: "gray" }}>© 2023 Memtherscan</p>
      </div>
    </div>
  );
}
