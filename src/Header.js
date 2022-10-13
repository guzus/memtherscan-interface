import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link className="title" to="/">
      Memtherscan
    </Link>
  );
}
