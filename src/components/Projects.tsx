import { projects } from '../data'

export function Projects() {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className={project.highlight ? 'highlight' : ''}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              )}
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Ver projeto →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
