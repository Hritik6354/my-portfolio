export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div>
          <p className="section-label">// ABOUT ME</p>
          <h2 className="section-title">Turning ideas into digital reality</h2>

          <p className="about-text">
            I'm Hrithik Kushwaha, a passionate Full-Stack Python Developer with
            over 1 year of hands-on experience building web applications. I
            specialize in Django, Flask, and modern frontend technologies
            including React and Tailwind CSS.
          </p>
          <p className="about-text">
            From developing SEO analysis tools and HR management systems to
            delivering production-ready websites like QR Orange and i-Spur, I
            love turning complex problems into clean, scalable solutions. I'm
            always exploring new technologies — whether it's web scraping with
            BeautifulSoup, data visualization with Plotly, or crafting
            responsive UIs that feel alive.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-num">1.5+</div>
              <div className="stat-label">YEARS EXP</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">4+</div>
              <div className="stat-label">PROJECTS</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">10+</div>
              <div className="stat-label">TECH SKILLS</div>
            </div>
          </div>
        </div>

        <div className="about-img-box">
          <div className="orbit-ring">
            <div className="orbit-dot"></div>
          </div>
          <div className="orbit-ring">
            <div className="orbit-dot"></div>
          </div>
          <div className="avatar-frame">
            <div className="avatar-inner">HK</div>
          </div>
        </div>
      </div>
    </section>
  );
}