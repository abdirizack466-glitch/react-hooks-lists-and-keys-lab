import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{about}</p>

      {technologies.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  );
}

export default ProjectItem;