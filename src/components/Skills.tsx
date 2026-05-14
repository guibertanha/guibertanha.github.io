import { skillGroups } from '../data'

export function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <h4>{group.label}</h4>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
