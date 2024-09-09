"use client";

import React, { useState } from "react";

// dummy data
import { dummyData } from "../data/constants";

// ui component
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const [filter, setFilter] = useState("");

  const changeFilterValue = (v) => {
    const callbacks = (e) =>
      setFilter((curr) => (curr = v ? (curr = v) : e.target.value));
    return callbacks;
  };

  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <p>
        There are projects that I have been created such as "Profile Website, AI
        Web Based, Re-Design UI from others into a code or application" and so
        on.
      </p>

      <div className="filter-container">
        <div className="option">
          <label>Cathegory</label>
          <div className="list-items">
            <a onClick={() => setFilter("")}>All</a>
            <a onClick={changeFilterValue("Web")}>Web</a>
            <a onClick={changeFilterValue("Mobile")}>Mobile</a>
            <a onClick={changeFilterValue("Desktop")}>Desktop</a>
            <a onClick={changeFilterValue("Machine Learning")}>
              Machine Learning
            </a>
            <a onClick={changeFilterValue("Game")}>Game</a>
          </div>
        </div>

        <div className="search">
          <input
            type="search"
            placeholder="Search"
            onChange={changeFilterValue("")}
          />
        </div>
      </div>

      <div className="card-list-container">
        {dummyData.sections.portfolio
          .filter((item) => {
            return filter === ""
              ? item
              : item.title.toLowerCase().includes(filter);
          })
          .map((item) => (
            <ProjectCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}

          <div className="circle">#</div>
      </div>
    </section>
  );
}
