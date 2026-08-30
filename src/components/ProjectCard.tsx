import { Project } from "../types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h1 className="text-lg font-semibold text-slate-900">{project.title}</h1>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((ts) => (
          <span
            key={ts}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {ts}
          </span>
        ))}
      </div>

      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 underline underline-offset-4 hover:text-slate-600"
        >
          GitHub Repo →
        </a>
      )}
    </div>
  );
}