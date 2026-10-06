import { useEffect, useState } from 'react';
import Section from './Section.jsx';
import { featuredProjects, profile } from '../data.js';
import { GitHubIcon, ArrowIcon } from './Icons.jsx';

const HIDDEN = new Set([
  'demo',
  `${profile.githubUser}.github.io`,
  'Portfolio',
  'Mcart-server',
  'ChatApp',
  'Next-app',
]);

// Curated repos come from data.js; descriptions and update dates are enriched live from GitHub.
export default function Projects() {
  const [repos, setRepos] = useState({});
  const [others, setOthers] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`)
      .then((r) => (r.ok ? r.json() : []))
      .then((list) => {
        if (cancelled || !Array.isArray(list)) return;
        const featured = new Set(featuredProjects.map((p) => p.name));
        setRepos(Object.fromEntries(list.map((r) => [r.name, r])));
        setOthers(list.filter((r) => !r.fork && !featured.has(r.name) && !HIDDEN.has(r.name)));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section id="projects" index="05" title="Projects">
      <p className="section-lede">
        My client work at PIMCO is private, so these are personal projects from{' '}
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>: smaller explorations across the stack.
      </p>
      <div className="projects-grid">
        {featuredProjects.map((p) => {
          const live = repos[p.name];
          const updated = live?.pushed_at || live?.updated_at;
          return (
            <a
              className="card project-card"
              key={p.name}
              href={live?.html_url ?? `${profile.github}/${p.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-top">
                <GitHubIcon />
                <ArrowIcon />
              </div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              {updated && (
                <span className="project-date">
                  Updated {new Date(updated).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                </span>
              )}
            </a>
          );
        })}
      </div>

      {others.length > 0 && (
        <div className="more-repos">
          <span className="label">More on GitHub</span>
          <div className="tags">
            {others.map((r) => (
              <a className="tag tag-link" key={r.id} href={r.html_url} target="_blank" rel="noreferrer">
                {r.name}
                {r.language && <span className="muted"> · {r.language}</span>}
              </a>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
