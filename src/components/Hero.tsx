import { personal } from '../data'

export function Hero() {
  return (
    <section id="about">
      <h1>{personal.name}</h1>
      <p className="title">{personal.title}</p>
      <p className="tagline">{personal.tagline}</p>
      <p className="about">{personal.about}</p>
      <div className="links">
        <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`mailto:${personal.email}`}>Email</a>
      </div>
    </section>
  )
}
