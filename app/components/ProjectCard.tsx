"use client";

import Image from "next/image";

interface CardType {
  image: string;
  title: string;
  description: string;
}

export default function ProjectCard({ image, title, description }: CardType) {
  return (
    <div className="project-card-container">
      <div className="img-content">
        <Image src={image} alt={title} width={350} height={200} />
      </div>
      <div className="description-content">
        <label>{title}</label>
        <p>{description}</p>
        <div className="circle">#</div>
      </div>
    </div>
  );
}
