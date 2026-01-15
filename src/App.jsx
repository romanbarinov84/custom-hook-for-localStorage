import { useState } from "react";
import "./App.css";

const NameInput = () => {
  const [name, setName] = useState("");

  return (
    <div className="name-container">
      <h1 className="name-heading">
        Your name is: <span className="name-span">{name}</span>
      </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          const value = e.target.value;
          const formatted =
            value.charAt(0).toLocaleUpperCase() + value.slice(1);
          setName(formatted);
        }}
        placeholder="Enter your name"
        className="name-input"
      />
      <button
        className="name-button"
        onClick={() => setName("")}
      >
        Clear
      </button>
    </div>
  );
};

export default NameInput;
