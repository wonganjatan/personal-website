import { DEFAULT_PROJECTS } from "../projects/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {

    return(
        <section>
            {DEFAULT_PROJECTS.map(project => (
                <ProjectCard key={project.title} project={project}/>
            ))}
        </section>
    )
}