import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { projects } from '../data'
import { ArrowLeft, External } from '../icons'
import { ProjectCover } from './ProjectCover'

/** Opens a project in the drawer by setting ?project=<slug>, so drawers are linkable and work with Back. */
export function useOpenProject() {
  const [params, setParams] = useSearchParams()
  return (slug: string) => {
    const next = new URLSearchParams(params)
    next.set('project', slug)
    setParams(next)
  }
}

/** Right-hand project drawer, matching the original binadiegha.xyz project panel. */
export function ProjectDrawer() {
  const [params, setParams] = useSearchParams()
  const project = projects.find((p) => p.slug === params.get('project'))
  const panelRef = useRef<HTMLDivElement>(null)

  const close = () => {
    const next = new URLSearchParams(params)
    next.delete('project')
    setParams(next)
  }

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    panelRef.current?.scrollTo(0, 0)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project])

  if (!project) return null
  const link = project.website ?? project.repo

  return (
    <section className="drawer-backdrop" onClick={close}>
      <div
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        tabIndex={-1}
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-scroll">
          <header className="drawer-top">
            <button className="drawer-back" onClick={close} aria-label="Close project">
              <ArrowLeft width={18} height={18} />
            </button>
            <p className="drawer-crumb">
              <span>Projects</span> / {project.name}
            </p>
          </header>

          <h3 className="drawer-title">{project.name}</h3>
          <p className="drawer-blurb">{project.blurb}</p>

          <ProjectCover project={project} className="drawer-cover" />

          {project.metric && (
            <div className="drawer-metric">
              <strong>{project.metric.value}</strong> {project.metric.label}
            </div>
          )}

          <h4 className="drawer-h">About</h4>
          <p className="drawer-text">{project.about}</p>

          {project.highlights && (
            <>
              <h4 className="drawer-h">Highlights</h4>
              <ul className="drawer-list">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </>
          )}

          <h4 className="drawer-h">Technologies / Tools</h4>
          <div className="drawer-chips">
            {project.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <h4 className="drawer-h">Roles</h4>
          <div className="drawer-chips">
            {project.roles.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>

          {project.website && (
            <>
              <h4 className="drawer-h">Website</h4>
              <a className="drawer-link" href={project.website} target="_blank" rel="noreferrer">
                {project.website}
              </a>
            </>
          )}

          {project.repo && (
            <>
              <h4 className="drawer-h">Git Repo</h4>
              <a className="drawer-link" href={project.repo} target="_blank" rel="noreferrer">
                {project.repo}
              </a>
            </>
          )}
        </div>

        {link ? (
          <a className="drawer-cta" style={{ background: project.brand }} href={link} target="_blank" rel="noreferrer">
            View Project <External width={14} height={14} />
          </a>
        ) : (
          <div className="drawer-cta muted-cta" style={{ background: project.brand }}>
            Internal project · details on request
          </div>
        )}
      </div>
    </section>
  )
}
