"use client";
import React, { useState } from "react";
import Project from "../components/project/project";
import { PROJECTS, TProject } from "../data";
import ProjectModal from "../components/modal/projectModal";
import ClientPortal from "../ClientPortal/clientPortal";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState<TProject | null>(null);
  const [modalActive, setModalActive] = useState(false);

  const handleProjectChange = (proj: TProject) => {
    setCurrentProject(proj);
    setModalActive(true);
  };

  function handleCloseModal() {
    setCurrentProject(null);
    setModalActive(false);
  }
  return (
    <section>
      <h1 className="text-2xl font-black">Projects.</h1>

      <div className="flex flex-wrap gap-x-5">
        {PROJECTS.map((project) => (
          <Project
            key={project.id}
            project={project}
            handleClick={() => handleProjectChange(project)}
          />
        ))}
      </div>

      {modalActive && (
        <ClientPortal>
          <ProjectModal
            project={currentProject}
            handleClick={handleCloseModal}
          />
        </ClientPortal>
      )}
    </section>
  );
};

export default Projects;
