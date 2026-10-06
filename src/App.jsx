import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import { profile } from './data.js';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name} · Built with React
        </div>
      </footer>
    </>
  );
}
