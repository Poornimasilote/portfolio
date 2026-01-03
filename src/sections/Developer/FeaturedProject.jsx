import { useRef, useEffect } from "react";

const FeaturedProject = ({ project }) => {
  const projectRef = useRef(project);

  // Always keep ref in sync with visible project
  useEffect(() => {
    projectRef.current = project;
  }, [project]);

  const openLink = (type) => {
    const url = projectRef.current[type];
    if (!url || url === "#") return;
    window.open(url, "_blank");
  };

  return (
    <div className="featured-project glass">
      <div className="featured-content">
        <h3>{project.title}</h3>
        <p className="text-muted">{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((item) => (
            <span key={item} className="tech-pill">
              {item}
            </span>
          ))}
        </div>

        <div className="project-links">
          <span
            role="link"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, "_blank", "noopener,noreferrer");
            }}
          >
            GitHub
          </span>

          <span
            role="link"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.live, "_blank", "noopener,noreferrer");
            }}
          >
            Live Demo
          </span>
        </div>

      </div>

      <div className="featured-image">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
};

export default FeaturedProject;
