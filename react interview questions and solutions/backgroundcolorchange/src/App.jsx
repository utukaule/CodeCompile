import React, { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("bg-white");

  const colors = [
    { name: "White", class: "bg-white text-dark" },
    { name: "Red", class: "bg-danger text-white" },
    { name: "Blue", class: "bg-primary text-white" },
    { name: "Green", class: "bg-success text-white" },
    { name: "Yellow", class: "bg-warning text-dark" },
  ];

  return (
    <div className={`${bgColor} min-vh-100`}>
      {colors.map((item) => {
        return (
          <button onClick={() => setBgColor(item.class)}>{item.name}</button>
        );
      })}
    </div>
  );
};

export default App;
