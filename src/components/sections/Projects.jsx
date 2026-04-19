export default function Projects() {
  const projects = [
    {
      id: "p1",
      emoji: "🔍",
      title: "SEO Analyzer Tool",
      desc: "A Django-based SEO tool that crawls websites, analyzes keywords, detects issues like missing meta tags, broken links, and provides actionable insights. Features include website crawling (internal & external links), H1/Meta/Title analysis, keyword density analysis, broken link detection, project-wise crawl history, user authentication, and a responsive dashboard.",
      tags: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    },
    {
      id: "p2",
      emoji: "👥",
      title: "HR Management System (HRMS)",
      desc: "A comprehensive HR management system built as an academic project at Sardar Patel University. Features department management, attendance tracking with one-click check-in, attendance graph analysis using chart libraries, leave management with approval workflows, and separate dashboards for HR and employees with detailed reporting.",
      tags: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    },
    {
      id: "p3",
      emoji: "🚀",
      title: "i-Spur.com — Frontend Development",
      desc: "Developed the complete frontend for i-Spur.com, a professional business platform. Built responsive, pixel-perfect UI components, implemented interactive elements with smooth animations, and ensured cross-browser compatibility and mobile responsiveness for an optimal user experience.",
      tags: ["HTML", "Tailwind-CSS", "JavaScript", "Responsive Design", "UI/UX"],
    },
    {
      id: "p4",
      emoji: "📱",
      title: "QR Orange — Full-Stack Website",
      desc: "Designed and developed the entire QR Orange website (qrorange.com) — both frontend and backend. Built a scalable architecture with a modern UI, implemented backend APIs, database management, user flows, and deployed the full production-ready application.",
      tags: ["Flask", "Python", "HTML", "Tailwind-CSS", "JavaScript", "Database", "Full-Stack"],
    },
  ];

  return (
    <section id="projects">
      <div className="projects-wrap">
        <p className="section-label">// PORTFOLIO</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className={`project-card ${project.id}`} key={project.id}>
              <div className="project-banner">{project.emoji}</div>
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}