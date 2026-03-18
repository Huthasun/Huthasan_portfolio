function ProjectCard({ title, desc, image }) {
  return (
    <div className="project-card">

      <div className="project-image">

        <img src={image} alt={title} />

        <div className="project-overlay">
          View Details →
        </div>

      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

    </div>
  );
}

export default ProjectCard;