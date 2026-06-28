import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="app">
      <h1>React Base</h1>
      <p>Frontend is running.</p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
