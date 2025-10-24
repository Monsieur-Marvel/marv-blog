import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Blog</h1>
        <p>
          I’m <strong>Marvel Anyanwu</strong> — a passionate full-stack developer who loves
          turning ideas into elegant digital experiences.  
        </p>
        <a href="/blog" className="cta-button">Explore My Posts</a>
      </header>

      <section className="featured-section">
        <h2>Featured Topics</h2>
        <div className="topics">
          <div className="topic-card">💻 Web Development</div>
          <div className="topic-card">⚙️ DevOps</div>
          <div className="topic-card">📚 Tech Notes</div>
        </div>
      </section>
    </div>
  );
}

export default Home;