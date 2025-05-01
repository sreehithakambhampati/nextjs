"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h1>Dashboard {name}</h1>
    </div>
  );
}
