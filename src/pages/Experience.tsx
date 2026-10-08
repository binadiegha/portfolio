import { certifications, education, experience, profile, skills } from '../data'
import { Download } from '../icons'

export default function Experience() {
  return (
    <>
      <section className="page-head">
        <h1 className="h-xl gradient-text">Experience</h1>
        <p className="text">Software engineering across APIs, product, automation and robotics research.</p>
        {profile.cv && (
          <a className="btn-primary" href={profile.cv} download>
            <Download width={16} height={16} /> Download CV
          </a>
        )}
      </section>

      <div className="exp-layout">
        <section>
          <h2 className="h-sm label">Work</h2>
          <ol className="timeline">
            {experience.map((j) => (
              <li key={j.company + j.period} className={j.current ? 'current' : ''}>
                <div className="tl-head">
                  <div>
                    <h3>{j.role}</h3>
                    <p className="tl-company">
                      {j.company} <span>· {j.location}</span>
                    </p>
                  </div>
                  <span className="tl-period">{j.period}</span>
                </div>
                <ul>
                  {j.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <h2 className="h-sm label spaced">Education</h2>
          <div className="panel">
            <div className="tl-head">
              <div>
                <h3>{education.degree}</h3>
                <p className="tl-company">{education.school}</p>
              </div>
              <span className="tl-period">{education.year}</span>
            </div>
            <ul>
              {education.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="exp-side">
          <div className="panel">
            <h2 className="h-sm">Skills</h2>
            {skills.map((s) => (
              <div className="skill-group" key={s.group}>
                <span className="eyebrow">{s.group}</span>
                <div className="tags">
                  {s.items.map((i) => (
                    <span key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="panel">
            <h2 className="h-sm">Certifications</h2>
            <ul className="certs">
              {certifications.map((c) => (
                <li key={c.name}>
                  <span>{c.name}</span>
                  <span className="muted">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}
