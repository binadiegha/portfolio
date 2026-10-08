import type { Project } from '../data'

/** Project image, or a generated gradient cover when the project has no image. */
export function ProjectCover({ project, className = '' }: { project: Project; className?: string }) {
  if (project.cover) {
    return (
      <div className={`cover ${className}`}>
        <img src={project.cover} alt={`${project.name} preview`} loading="lazy" />
      </div>
    )
  }
  const [from, to] = project.gradient
  return (
    <div
      className={`cover cover-gen ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      role="img"
      aria-label={`${project.name} cover`}
    >
      <span className="cover-cat">{project.category}</span>
      <span className="cover-name">{project.name}</span>
      {project.metric && (
        <span className="cover-metric">
          <strong>{project.metric.value}</strong> {project.metric.label}
        </span>
      )}
    </div>
  )
}
