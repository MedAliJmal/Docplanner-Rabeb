import React from "react";
const tab = [
  {
    id: 1,
    logo: "https://www.docplanner.com/icons/icon-patients.svg",
    title: "For patients",
    p: "Find a doctor, book a visit and solve any health-related doubt",
    color: "#00CCB1",
  },
  {
    id: 2,
    logo: "https://www.docplanner.com/icons/icon-doctors.svg",
    title: "For doctors",
    p: "Save time managing visits and cut no-shows by half",
    color: "#3D83DF",
  },
  {
    id: 3,
    logo: "https://www.docplanner.com/icons/icon-clinics.svg",
    title: "For clinics",
    p: "Deliver an exceptional patient experience in your clinic",
    color: "#1B2734",
  },
];

const Part2 = () => {
  return (
    <div>
      {tab.map((el) => (
        <div key={el.id} style={{ background: el.color }} className="block3">
          <img src={el.logo} alt=""></img>
          <h3>{el.title}</h3>
          <p>{el.p}</p>
        </div>
      ))}
    </div>
  );
};

export default Part2;
