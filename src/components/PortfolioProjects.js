import InfoIcon from "@/icons/InfoIcon";
import GithubIcon from "@/icons/GithubIcon";
import GoToIcon from "@/icons/GoToIcon";
import Image1 from "../images/Image1.png";
import { motion } from "framer-motion";
import importedProjects from "@/projects";
import { useState } from "react";

export default function PortfolioProjects() {
  const [projects] = useState(importedProjects);

  return (
    <motion.div
      className="projects animate-gradient"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="before"></span>
      <span className="border"></span>
      {projects.slice(0, 4).map((project, idx) => (
        <div className="project" key={project.link + idx}>
          <span
            className="before"
            style={{
              background: `linear-gradient(180deg, ${project.color} 50%, #04212C 100%)`,
            }}
          ></span>
          <span className="project-border"></span>
          <img src={Image1.src} alt="project image" />
          <div className="tech">
            {project.tech.map((tag) => (
              <span
                className="tag"
                style={{ backgroundColor: `${project.color}50` }}
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="options">
            <GoToIcon link={project.link} />
            <GithubIcon link={project.github} />
            <InfoIcon info={project.info} />
          </div>
        </div>
      ))}
    </motion.div>
  );
}
