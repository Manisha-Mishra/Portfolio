import Section from './Section.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li className="job" key={job.period}>
            <div className="job-period">{job.period}</div>
            <div className="job-body">
              <h3>{job.role}</h3>
              <p className="job-company">
                <span className="accent">{job.company}</span>
                {job.client && <> · {job.client}</>}
              </p>
              <p className="job-meta">
                {job.platform && <span className="pill">{job.platform}</span>}
                <span className="muted">{job.location}</span>
              </p>
              <ul className="job-highlights">
                {job.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="tags">
                {job.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
