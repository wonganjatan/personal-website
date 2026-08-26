import { Project } from "../types/project";

type Props = {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div>
                {project.techStack.map(ts => (
                    <p>{ts}</p>
                ))}
            </div>
            {project.repoUrl && (
                <a href={project.repoUrl}>GitHub Repo</a>
            )}
        </div>
    )
}