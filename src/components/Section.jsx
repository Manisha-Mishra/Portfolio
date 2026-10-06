import { useEffect, useRef, useState } from 'react';

// Section wrapper with a numbered heading and a fade-in when it scrolls into view.
export default function Section({ id, index, title, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`section reveal ${visible ? 'is-visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">
          <span className="section-index">{index}</span>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
