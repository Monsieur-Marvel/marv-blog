import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hey there 👋 I'm <span className="highlight">Marvel</span>, a passionate creator...
        </p>

        <h2>What I Do</h2>
        <p>
          I write about software development, creative projects, and lessons learned...
        </p>

        <div className="social-links">
          <a href="https://linkedin.com/in/marvelanyanwu" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/marvel" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:marveljp55@gmail.com">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default About;