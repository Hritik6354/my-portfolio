import { useEffect } from "react";

export default function Skills() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.pct + '%';
          });
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-category').forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="skills">
      <div className="skills-wrap">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-category">
            <h3 className="skill-cat-title"><span className="skill-cat-icon">⚡</span> Frontend</h3>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>React</span>
                <span>92%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="92"></div>
              </div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>Tailwind CSS</span>
                <span>90%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="90"></div>
              </div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>JavaScript</span>
                <span>95%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="95"></div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category">
            <h3 className="skill-cat-title"><span className="skill-cat-icon">⚙️</span> Backend</h3>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>Python</span>
                <span>85%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="85"></div>
              </div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>Django</span>
                <span>80%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="80"></div>
              </div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>Flask</span>
                <span>82%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="82"></div>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="skill-category">
            <h3 className="skill-cat-title"><span className="skill-cat-icon">🗄️</span> Database</h3>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>MySQL</span>
                <span>85%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="85"></div>
              </div>
            </div>
          </div>

          {/* Libraries */}
          <div className="skill-category">
            <h3 className="skill-cat-title"><span className="skill-cat-icon">📚</span> Libraries</h3>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>BeautifulSoup</span>
                <span>88%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="88"></div>
              </div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>Requests</span>
                <span>90%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="90"></div>
              </div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>Plotly</span>
                <span>85%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="85"></div>
              </div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>NumPy</span>
                <span>85%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="85"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}