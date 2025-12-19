import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const navigate = useNavigate();
  const { isDark } = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  function handleCardClick(project, e) {
    // Prevent navigation if clicking on footer links
    if (e.target.closest(".project-card-footer")) {
      return;
    }
    // Navigate to detail page
    const projectId = project.projectName.toLowerCase().replace(/\s+/g, "");
    navigate(`/project/${projectId}`);
  }

  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark clickable-card"
                      : "project-card project-card-light clickable-card"
                  }
                  onClick={(e) => handleCardClick(project, e)}
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          // External links → open in new tab
                          if (!link.url.startsWith("/")) {
                            return (
                              <span
                                key={i}
                                className={isDark ? "dark-mode project-tag" : "project-tag"}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openUrlInNewTab(link.url);
                                }}
                              >
                                {link.name}
                              </span>
                            );
                          }

                          // Internal link (View Details) → navigate internally
                          const internalProjectId = link.url.split("/").pop(); // extracts "asaanqurbani"
                          return (
                            <span
                              key={i}
                              className={
                                isDark
                                  ? "dark-mode project-tag detail-tag"
                                  : "project-tag detail-tag"
                              }
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/project/${internalProjectId}`);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}