import React from "react";
const bloc1 = {
  logo: "https://www.docplanner.com/img/sygnet.png",
  title: "Making the healthcare experience more human",
  p1: "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
  p2: "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",
};

export const Part1 = () => {
  return (
    <div>
      <div className="title">
        <img src={bloc1.logo} alt="" />
        <h1>{bloc1.title}</h1>
      </div>
      <div className="info">
        <p>{bloc1.p1}</p>
        <p>{bloc1.p2}</p>
      </div>
    </div>
  );
};
