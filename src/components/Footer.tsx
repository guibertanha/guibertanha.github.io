import { personal } from '../data'

export function Footer() {
  return (
    <footer>
      <p>
        {personal.name} · {personal.location}
      </p>
      <div className="footer-links">
        <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`mailto:${personal.email}`}>{personal.email}</a>
      </div>
    </footer>
  )
}
