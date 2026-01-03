import { useEffect, useState } from "react";
import projects from "./projectData";
import ProjectGrid from "./ProjectGrid";
import FeaturedProject from "./FeaturedProject";
import "./DeveloperStyles.css";

const Developer = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => {
        const currentIndex = projects.findIndex(
          (p) => p.id === prev.id
        );
        return projects[(currentIndex + 1) % projects.length];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="developer">
      <div className="section-container developer-section">
        <h2 className="heading-lg">Poornima as a Full-Stack Developer</h2>

        <ProjectGrid
          projects={projects}
          activeProject={activeProject}
          onSelect={setActiveProject}
        />

        <FeaturedProject project={activeProject} />
      </div>
    </section>
  );
};

export default Developer;
