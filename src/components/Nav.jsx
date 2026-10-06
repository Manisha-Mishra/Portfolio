import { useEffect, useState } from 'react';
import useTheme from './useTheme.js';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './Icons.jsx';

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

export default function Nav() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" onClick={close}>MM</a>
        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={close}>{label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
