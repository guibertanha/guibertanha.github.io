import { experiences } from '../data'

export function Experience() {
  return (
    <section id="experience">
      <h2>Experiência</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <article key={exp.company}>
            <header>
              <div>
                <h3>{exp.role}</h3>
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                ) : (
                  <span>{exp.company}</span>
                )}
              </div>
              <time>{exp.period}</time>
            </header>
            <ul>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="tags">
              {exp.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
