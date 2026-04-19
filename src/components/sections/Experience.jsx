import { useEffect } from "react";

export default function Experience() {
  const experiences = [
    {
      year: "Jan 2025 — Apr 2025",
      role: "Python Web Development Intern",
      company: "Arth Consultancy Services, Vadodara, Gujarat",
      desc: "Worked on a Django-based SEO Analyzer Tool that crawls websites, analyzes keywords, and detects issues like missing meta tags and broken links. Sorted and organized files, spreadsheets, and reports. Analyzed problems and collaborated with teams to develop solutions. Prepared project presentations and reports to assist senior staff. Explored new technologies and approaches to streamline processes.",
      tags: ["Django", "Python", "SEO", "Web Crawling", "Team Collaboration"],
    },
    {
      year: "2025",
      role: "Frontend Developer",
      company: "i-Spur.com",
      desc: "Developed the complete frontend for i-Spur.com, building responsive and interactive UI components. Ensured pixel-perfect designs, cross-browser compatibility, and mobile responsiveness. Collaborated closely with the design and backend teams to deliver a polished user experience.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    },
    {
      year: "2026",
      role: "Full-Stack Developer",
      company: "QR Orange (qrorange.com)",
      desc: "Designed and developed the entire QR Orange website end-to-end, handling both frontend and backend. Built a scalable architecture, implemented RESTful APIs, managed the database layer, and deployed the production-ready application.",
      tags: ["Flask", "Python", "Full-Stack", "Database", "Deployment"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".timeline-item")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className="exp-wrap">
        <p className="section-label">// CAREER PATH</p>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot"></div>
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-desc">{exp.desc}</p>
              <div className="timeline-tech">
                {exp.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}