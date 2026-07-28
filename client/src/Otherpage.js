import React from "react";
import { Link } from "react-router-dom";

export default function Otherpage() {
  return (
    <div>
      <h1>Other Page</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
