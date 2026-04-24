export default function Hero() {
  return (
    <section id="hero">
      <p className="hero-tag">🚀 Full Stack Developer</p>
      <h1 className="hero-name">Hrithik Kushwaha  </h1>
      <p className="hero-role">{"// Building the future, one commit at a time"}</p>
      <p className="hero-desc">
        Crafting immersive digital experiences with clean code and modern tech.
      </p>

      <div className="hero-btns">
        <a href="#projects" className="btn btn-primary">View Projects →</a>
        <a href="#contact" className="btn btn-outline">Get In Touch</a>
      </div>

      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}