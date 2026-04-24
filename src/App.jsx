import { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend",
      URL: "https://dineoutrestaurant001.netlify.app/",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Landing page",
      description:
        "Real-time furnitures for home and office with a modern design and user-friendly interface",
      URL: "https://sheddyfurniture.netlify.app/",
      technologies: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Todo list Website",
      description:
        "Responsive portfolio website showcasing projects and skills",
      URL: "https://grand-pony-a01842.netlify.app/",
      technologies: ["React", "Vite", "CSS3"],
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "A weather forecasting app that provides real-time weather data and forecasts",
      URL: "https://sheddyweatherapp.netlify.app/",
      technologies: ["React", "Vite", "CSS3"],
    },
    {
      id: 5,
      title: "CSS Documentation",
      description:
        "A comprehensive documentation site for CSS best practices and guidelines",
      URL: "https://medium.com/@shedrachmusa420/css-flexbox-documentation-377336c6f3ac",
      technologies: ["Medium", "CSS3"],
    },
    {
      id: 6,
      title: "Advanced JavaScript Concepts",
      description:
        "A comprehensive documentation site for advanced JavaScript concepts and best practices",
      URL: "https://medium.com/@shedrachmusa420/advanced-javascript-concepts-simplified-771bcf8402a5",
      technologies: ["Medium", "JavaScript"],
    },
    {
      id: 7,
      title: "Introduction to JavaScript",
      description:
        "A comprehensive documentation site for JavaScript basics and best practices",
      URL: "https://medium.com/@shedrachmusa420/introduction-to-javascript-a-beginners-guide-58faeb3a0141",
      technologies: ["Medium", "JavaScript"],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    { category: "Tools", items: ["Git", "Vite", "Docker", "VS Code"] },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">Portfolio</div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a
                href="#home"
                onClick={() => {
                  setActiveSection("home");
                  setMenuOpen(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  setActiveSection("about");
                  setMenuOpen(false);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  setActiveSection("projects");
                  setMenuOpen(false);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => {
                  setActiveSection("skills");
                  setMenuOpen(false);
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setActiveSection("contact");
                  setMenuOpen(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Hi, my name is Musa Shedrach, I'm a Developer</h1>
            <p>Creating beautiful and functional web experiences</p>
            <button
              className="cta-button"
              onClick={() => {
                setActiveSection("contact");
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2>About Me</h2>

          <img src="/image.jpg" alt="Musa Shedrach" className="about-image" />
          <div className="about-content">
            <p>
              I'm a passionate full-stack developer with expertise in building
              modern web applications. With 3+ years of experience, I've worked
              on various projects ranging from e-commerce platforms to
              collaborative tools.
            </p>
            <p>
              I'm dedicated to writing clean, efficient code and creating
              user-friendly interfaces. When I'm not coding, you'll find me
              exploring new technologies and contributing to open-source
              projects.
            </p>
            <p>
              I am also a technical writer, with a knack for communicating
              different concepts in clear and concise language. I have created
              technical documentation for a variety of projects, ranging from
              user manuals and tutorials to developer guides and API
              documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>
                  <a
                    href={project.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-category">
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:shedrachmusa420@gmail.com" className="contact-btn">
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/shedrach-musa-a6b182231/"
              className="contact-btn"
            >
              LinkedIn
            </a>
            <a href="https://github.com/sheddy450" className="contact-btn">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Musa Shedrach. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
