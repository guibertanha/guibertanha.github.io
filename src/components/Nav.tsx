import { personal } from '../data'

export function Nav() {
  return (
    <nav>
      <a href="#about">{personal.name}</a>
      <ul>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href={`mailto:${personal.email}`}>Contato</a></li>
      </ul>
    </nav>
  )
}
