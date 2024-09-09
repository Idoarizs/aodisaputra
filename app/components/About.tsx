import Image from "next/image";
import React from "react";

// image
import images from "../assets/index";

// dummy data
import { dummyData } from "../data/constants";

export default function About() {
  return (
    <section id="about">
      <div className="img-content">
        <Image src={images.profile} alt="dyy-portfolio" width={250} />
      </div>

      <div className="about-content">
        <div className="about-item">
          <h1>About</h1>
          <p>
            Hello, I'm Aodi. Welcome to my profile website, I'm Informatics
            Engineering student at 5th semester right now. This semester I
            decide to choose focusing in AI from three specialization available
            on my major. Currently I'm still looking for any opportunities that
            makes me interest to take so I can keep learning and improving my
            interpersonal and technical skills or anything that can be useful
            for me and others.
          </p>
        </div>

        <div className="contact-item">
          {dummyData.sections.about.map((item) => (
            <a key={item.id} href={item.link}>{item.media}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
