import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetail.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { isDark } = useContext(StyleContext);
  const [selectedImage, setSelectedImage] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

    // Find the project by converting projectName to URL-friendly format
  const project = bigProjects.projects.find(
    (p) => p.projectName.toLowerCase().replace(/\s+/g, "") === projectId
  );

  // Tab key screenshot navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!project?.screenshots || project.screenshots.length === 0) return;

      if (e.key === "Tab") {
        e.preventDefault();
        setSelectedImage((prev) => (prev + 1) % project.screenshots.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project?.screenshots]);



  if (!project) {
    return (
      <div className={isDark ? "dark-mode" : ""}>
        <div className="error-page">
          <h1 className={isDark ? "dark-mode" : ""}>Project Not Found</h1>
          <button
            className={isDark ? "dark-mode error-button" : "error-button"}
            onClick={() => navigate("/#projects")}
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate("/");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode" : ""}>
        <div className="project-detail-container">
          {/* Back Button */}
          <button
            className={isDark ? "dark-mode back-button" : "back-button"}
            onClick={handleBackClick}
          >
            ← Back to Projects
          </button>

          {/* Project Header */}
          <div className="project-header">
            <div className="project-title-section">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="project-logo"
                />
              )}
              <div>
                <h1 className={isDark ? "dark-mode project-title" : "project-title"}>
                  {project.projectName}
                </h1>
                <p className={isDark ? "dark-mode project-tagline" : "project-tagline"}>
                  {project.projectDesc}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              {project.footerLink
                ?.filter((link) => !link.url.startsWith("/"))
                .map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={isDark ? "dark-mode btn-primary" : "btn-primary"}
                  >
                    {link.name}
                  </a>
                ))}
            </div>
          </div>

          {/* Screenshot Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className={isDark ? "dark-mode screenshot-gallery" : "screenshot-gallery"}>
              <div className="main-screenshot">
                <img
                  src={project.screenshots[selectedImage]}
                  alt={`${project.projectName} screenshot ${selectedImage + 1}`}
                  className={isDark ? "dark-mode" : ""}
                />
              </div>
              <div className="thumbnail-container">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${
                      selectedImage === index ? "active" : ""
                    } ${isDark ? "dark-mode" : ""}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={screenshot} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Details Grid */}
          <div className="details-grid">
            {/* Description */}
            <div className={isDark ? "dark-mode detail-card full-width" : "detail-card full-width"}>
              <h2>About This Project</h2>
              <p>{project.detailedDesc || project.projectDesc}</p>
            </div>

            {/* Tech Stack */}
            {project.techStack && (
              <div className={isDark ? "dark-mode detail-card" : "detail-card"}>
                <h2>Tech Stack</h2>
                <div className="tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={isDark ? "dark-mode tech-tag" : "tech-tag"}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && (
              <div className={isDark ? "dark-mode detail-card" : "detail-card"}>
                <h2>Key Features</h2>
                <ul className="features-list">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
