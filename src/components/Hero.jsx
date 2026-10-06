import { profile } from '../data.js';
import { GitHubIcon, LinkedInIcon, PinIcon } from './Icons.jsx';

const codeLines = [
  [['c', '// before: N+1 calls per fund manager']],
  [['k', 'const '], ['', 'funds = '], ['k', 'await '], ['f', 'batchFetch'], ['', '(managerIds, {']],
  [['', '  retry: '], ['n', '3'], ['', ',']],
  [['', '});']],
  [],
  [['c', '// p95 latency']],
  [['f', 'expect'], ['', '(p95).'], ['f', 'toDrop'], ['', '('], ['s', "'40%'"], ['', '); '], ['ok', '✓']],
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> Open to opportunities in Sweden & the EU
          </p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">
            {profile.title} <span className="muted">·</span>{' '}
            <span className="accent">{profile.tagline}</span>
          </p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">Get in touch</a>
            <a className="btn btn-ghost" href="#experience">View experience</a>
          </div>
          <div className="hero-meta">
            <span><PinIcon /> {profile.location}</span>
            <span className="badge">{profile.workAuth}</span>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>

        <div className="hero-card" aria-hidden="true">
          <div className="code-header">
            <span /><span /><span />
            <em>fundService.ts</em>
          </div>
          <pre className="code">
            {codeLines.map((line, i) => (
              <div key={i}>
                {line.length === 0 ? ' ' : line.map(([cls, text], j) => (
                  <span key={j} className={cls}>{text}</span>
                ))}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
