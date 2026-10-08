import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../data'
import { Close, GitHub, LinkedIn, Menu, XLogo } from '../icons'
import { ProjectDrawer } from './ProjectDrawer'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export function Socials() {
  return (
    <div className="socials">
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GitHub width={18} height={18} />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedIn width={18} height={18} />
      </a>
      <a href={profile.x} target="_blank" rel="noreferrer" aria-label="X">
        <XLogo width={17} height={17} />
      </a>
    </div>
  )
}

export function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="brand">
            {profile.short}
          </Link>
          <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
            {open ? <Close width={20} height={20} /> : <Menu width={20} height={20} />}
          </button>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <Socials />
        </div>
      </footer>

      <ProjectDrawer />
    </>
  )
}
