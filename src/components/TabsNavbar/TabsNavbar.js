import React from 'react';
import './TabsNavbar.css'; 

const TabsNavbar = () => {
  const labels = [
    "Title & Preparations",
    "Instruments/Equipments",
    "Chemicals/Reagents/Solvents/Gas",
    "General",
    "Final Report"
  ];

  return (
    <div className="tabs-navbar">
      {labels.map((label, index) => (
        <div key={index} className={`tab-item gradient${index + 1}`}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default TabsNavbar;
