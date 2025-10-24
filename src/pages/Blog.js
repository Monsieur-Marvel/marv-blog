import "./Blog.css";
import { useNavigate } from "react-router-dom";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";

function Blog() {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "How I Built My First Portfolio Website",
      snippet:
        "In this post, I share the step-by-step process of designing and coding my portfolio site using React...",
      content:
        "This is the full content for the first blog post. It describes how I structured the portfolio, styled it, and optimized it for employers to review my projects easily.",
      image: post1,
    },
    {
      id: 2,
      title: "Mastering React Router for Multi-Page Apps",
      snippet:
        "Routing is key to making your app feel complete. Here's how I handled navigation between pages with React Router...",
      content:
        "React Router helps make navigation smooth without page reloads. In this article, I break down how to set up Routes and Link components effectively.",
      image: post2,
    },
    {
      id: 3,
      title: "Why Every Developer Should Learn Tailwind CSS",
      snippet:
        "I used to avoid utility-first CSS frameworks, until I tried Tailwind. Here's why I switched — and never looked back.",
      content:
        "Tailwind CSS made my workflow much faster. It lets me build beautiful designs without leaving my HTML. This post explores my favorite utilities and how I use them.",
      image: post3,
    },
  ];

  const recentPosts = posts.slice(0, 3);

  return (
    <div className="blog-layout">
      {/* === Main Blog Section === */}
      <div className="blog-main">
        <h1 className="blog-title">Latest Posts</h1>
        <div className="blog-grid">
          {posts.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <h2>{post.title}</h2>
              <p>{post.snippet}</p>
              <button
                className="read-btn"
                onClick={() => navigate(`/blog/${post.id}`, { state: post })}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* === Sidebar === */}
      <aside className="sidebar">
        <h3>Recent Posts</h3>
        <ul>
          {recentPosts.map((post) => (
            <li
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`, { state: post })}
            >
              <img src={post.image} alt={post.title} />
              <div>
                <h4>{post.title}</h4>
                <p>{post.snippet.slice(0, 50)}...</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default Blog;