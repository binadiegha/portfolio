import { Link } from 'react-router-dom'
import { Socials } from '../components/Layout'
import { ProjectCover } from '../components/ProjectCover'
import { useOpenProject } from '../components/ProjectDrawer'
import { highlights, profile, projects, services } from '../data'
import { Arrow, ArrowRight, Cpu, Mail, Server, Workflow } from '../icons'

const serviceIcons = { server: Server, workflow: Workflow, cpu: Cpu }

export function Avatar({ size = 88 }: { size?: number }) {
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      {profile.avatar ? <img src={profile.avatar} alt={profile.name} /> : <span>JB</span>}
    </div>
  )
}

export default function Home() {
  const openProject = useOpenProject()
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      <section className="hero">
        <h1 className="gradient-text">
          Hi, I'm {profile.first}. The B is for Binadiegha. I build reliable systems and the automations that make
          them fast.
        </h1>
      </section>

      <section className="bio-row">
        <div className="bio">
          <Avatar />
          <div>
            <h2 className="h-sm">Biography</h2>
            <p className="text">{profile.bio}</p>
            <p className="text focus">
              Currently focused on{' '}
              {profile.focus.map((f, i) => (
                <span key={f}>
                  <b>{f}</b>
                  {i < profile.focus.length - 2 ? ', ' : i === profile.focus.length - 2 ? ' and ' : ''}
                </span>
              ))}
              .
            </p>
          </div>
        </div>
        <div className="connect">
          <h2 className="h-sm">Let's connect</h2>
          <Socials />
          <a className="mail-link" href={`mailto:${profile.email}`}>
            <Mail width={15} height={15} /> {profile.email}
          </a>
        </div>
      </section>

      <section className="what">
        <div className="what-intro">
          <h2 className="h-md">What I do</h2>
          <p className="text">
            I design and run <b className="hl">backend services</b> end to end, then build the tooling around them.
            My goal is software that is fast, observable and boring in production.
          </p>
        </div>
        <div className="services">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon]
            return (
              <article className="service" key={s.title}>
                <span className="service-icon">
                  <Icon width={18} height={18} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            )
          })}
        </div>
        <Link to="/projects" className="round-link" aria-label="See all projects">
          <ArrowRight width={20} height={20} />
        </Link>
      </section>

      <section className="stats-strip">
        {highlights.map((h) => (
          <div key={h.label}>
            <strong className="gradient-text">{h.value}</strong>
            <span>{h.label}</span>
          </div>
        ))}
      </section>

      <section>
        <div className="section-head">
          <h2 className="h-lg">Featured Projects</h2>
          <Link to="/projects" className="text-link">
            All projects <ArrowRight width={15} height={15} />
          </Link>
        </div>
        <div className="featured">
          {featured.map((p, i) => (
            <article className={`feature ${i % 2 ? 'flip' : ''}`} key={p.slug}>
              <button className="feature-media" onClick={() => openProject(p.slug)} aria-label={`Open ${p.name}`}>
                <ProjectCover project={p} />
                <span className="corner">
                  <Arrow width={16} height={16} />
                </span>
              </button>
              <div className="feature-body">
                <span className="eyebrow">{p.category}</span>
                <h3 className="h-md">{p.name}</h3>
                <p className="text">{p.blurb}.</p>
                <div className="tags">
                  {p.tools.slice(0, 4).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <button className="text-link" onClick={() => openProject(p.slug)}>
                  View project <ArrowRight width={15} height={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2 className="h-lg">Have a role or a project in mind?</h2>
        <p className="text">I'm open to software engineering roles in the UK and remote.</p>
        <Link to="/contact" className="btn-primary">
          Get in touch <ArrowRight width={16} height={16} />
        </Link>
      </section>
    </>
  )
}
