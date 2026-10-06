import Section from './Section.jsx';
import { profile, stats, education } from '../data.js';

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="about-grid">
        <div className="about-text">
          {profile.summary.map((p) => <p key={p}>{p}</p>)}
          <div className="edu">
            <span className="label">Education</span>
            <strong>{education.degree}</strong>
            <span className="muted">{education.school} · {education.period}</span>
          </div>
        </div>
        <dl className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
