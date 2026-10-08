import { useState } from 'react'
import { ProjectCover } from '../components/ProjectCover'
import { useOpenProject } from '../components/ProjectDrawer'
import { projects } from '../data'
import { Arrow } from '../icons'

export default function Projects() {
  const openProject = useOpenProject()
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <section className="page-head">
        <h1 className="h-xl gradient-text">Projects</h1>
        <p className="text">
          Things I've built at work, at university and in the open. Click any project for the full story.
        </p>
      </section>

      <div className="filters" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={filter === c} className={filter === c ? 'on' : ''} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {shown.map((p) => (
          <button className="project-card" key={p.slug} onClick={() => openProject(p.slug)}>
            <div className="project-media">
              <ProjectCover project={p} />
              <span className="corner">
                <Arrow width={16} height={16} />
              </span>
            </div>
            <div className="project-meta">
              <span className="eyebrow">
                {p.category}
                {p.year && ` · ${p.year}`}
              </span>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
            </div>
          </button>
        ))}
      </div>
    </>
  )
}
