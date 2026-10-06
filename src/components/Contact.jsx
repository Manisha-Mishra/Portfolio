import { useState } from 'react';
import Section from './Section.jsx';
import { profile } from '../data.js';
import { MailIcon, PhoneIcon, LinkedInIcon, GitHubIcon } from './Icons.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const channels = [
    { icon: <MailIcon />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneIcon />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'in/manisha-mishra-', href: profile.linkedin },
    { icon: <GitHubIcon />, label: 'GitHub', value: profile.githubUser, href: profile.github },
  ];

  return (
    <Section id="contact" index="05" title="Contact">
      <div className="contact">
        <div>
          <p className="contact-lead">
            I'm looking for senior full stack roles in{' '}
            <span className="accent">fintech and data-heavy products</span>. I'm based in{' '}
            {profile.location} with EU work authorization.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Say hello</a>
            <button className="btn btn-ghost" onClick={copyEmail}>
              {copied ? 'Copied ✓' : 'Copy email'}
            </button>
          </div>
        </div>
        <ul className="channels">
          {channels.map((c) => {
            const external = c.href.startsWith('http');
            return (
              <li key={c.label}>
                <a href={c.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                  <span className="channel-icon">{c.icon}</span>
                  <span>
                    <span className="label">{c.label}</span>
                    <span className="channel-value">{c.value}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
