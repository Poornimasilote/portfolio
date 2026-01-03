const ProjectGrid = ({ projects, activeProject, onSelect }) => {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project-tile glass ${
            activeProject.id === project.id ? "active" : ""
          }`}
          onClick={() => onSelect(project)}
        >
          <img src={project.image} alt={project.title} />
          <h4>{project.title}</h4>
          <span>{project.tag}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
