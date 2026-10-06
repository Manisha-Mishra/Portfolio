import Section from './Section.jsx';
import { certifications } from '../data.js';
import { ArrowIcon } from './Icons.jsx';

function CertBody({ cert }) {
  return (
    <>
      <div className="cert-top">
        <span className="label">{cert.issuer}</span>
        {cert.url && <ArrowIcon />}
      </div>
      <h3>{cert.name}</h3>
      <p className="cert-meta">
        Issued {cert.date}
        {cert.expired && <> · Expired {cert.expired}</>}
      </p>
      {cert.credentialId && <p className="cert-id">ID {cert.credentialId}</p>}
    </>
  );
}

export default function Certifications() {
  return (
    <Section id="certifications" index="04" title="Certifications">
      <div className="certs-grid">
        {certifications.map((cert) =>
          cert.url ? (
            <a className="card cert-card cert-link" key={cert.name} href={cert.url} target="_blank" rel="noreferrer">
              <CertBody cert={cert} />
            </a>
          ) : (
            <div className="card cert-card" key={cert.name}>
              <CertBody cert={cert} />
            </div>
          )
        )}
      </div>
    </Section>
  );
}
