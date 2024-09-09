import Image, { StaticImageData } from "next/image";
import React from "react";

interface SkillCard {
  image: StaticImageData;
  title: string;
  description: string;
}

export default function SkillCard({ image, title, description }: SkillCard) {
  return (
    <div className="skill-card-container">
      <div className="description-content">
        <div className="img-content">
          <label>{title}</label>
          <Image src={image} alt={title} width={25} objectFit="cover"/>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
