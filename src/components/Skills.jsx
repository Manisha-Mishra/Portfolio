import Section from './Section.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="card skill-card" key={s.group}>
            <h3>{s.group}</h3>
            <div className="tags">
              {s.items.map((i) => <span className="tag" key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
