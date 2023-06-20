import InfoIcon from "@/icons/InfoIcon"
import GithubIcon from "@/icons/GithubIcon"
import GoToIcon from "@/icons/GoToIcon"
import projects from "@/projects"
import Image from "next/image"

export default function PortfolioProjects() {
  return (
    <div className="projects animate-gradient">
      <span className="before"></span>
      <span className="border"></span>
      {projects.map((project, idx) => (
        <div className="project" key={project.link + idx}>
          <span
            className="before"
            style={{
              background: `linear-gradient(180deg, ${project.color} 50%, #04212C 100%)`,
            }}
          ></span>
          <span className="project-border"></span>
          <Image
            src={project.image}
            alt="project image"
            width={310}
            height={255}
            quality={100}
            priority={false}
          />
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
            <GoToIcon link={project.link} projectColor={project.color} />
            <GithubIcon link={project.github} projectColor={project.color} />
            <InfoIcon info={{ ...project.info, projectColor: project.color }} />
          </div>
        </div>
      ))}
    </div>
  )
}
