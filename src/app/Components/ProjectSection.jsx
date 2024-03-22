"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectTags } from "./ProjectTags";

import data from "./ProjectData";

const projectsData = data;

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects / Current-Projects
      </h2>
      <div
        id="projects"
        className="text-white flex flex-col md:flex-row  items-center gap-5 py-6"
      >
        <ProjectTags
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="3D"
          isSelected={tag === "3D"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            videoUrl={project.videoUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
