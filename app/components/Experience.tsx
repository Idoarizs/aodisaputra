// dummy data
import { dummyData } from "../data/constants";

// ui component
import SkillCard from "./SkillCard";

export default function Experience() {
  return (
    <section id="experience">
      <div className="experience-content">
        <h1>Experience</h1>
        <p>
          I've experience in using a framework or library especially on
          Javascript environment like NextJS, ReactJS, and Axios to make a
          website that provide features like dynamic data which from API with
          the responsive design to increase user experience specific on client
          side.
        </p>
        <p>
          Sometimes I also make my own API using ExpressJS as the server side
          and some additional library to support it with the relational database
          integration using MySQL and Postman to make sure that my own API
          already fulfill the requirements before I deploy or integrate it with
          my client side application.
        </p>
      </div>

      <div className="skill-container-list">
        <div className="p-circle">#</div>
        {dummyData.sections.experience.map((item) => {
          return (
            <SkillCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
}
