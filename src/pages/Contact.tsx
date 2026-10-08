import { useState } from 'react'
import { profile } from '../data'
import { Check, Copy, External, GitHub, LinkedIn, Mail, Pin, XLogo } from '../icons'
import { Avatar } from './Home'

const channels = [
  { label: 'LinkedIn', handle: '/in/jonesbgabriel', href: profile.linkedin, Icon: LinkedIn },
  { label: 'GitHub', handle: '@binadiegha', href: profile.github, Icon: GitHub },
  { label: 'X', handle: '@binadiegha', href: profile.x, Icon: XLogo },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <>
      <section className="page-head">
        <h1 className="h-xl gradient-text">Let's work together</h1>
        <p className="text">
          Open to software engineering roles (backend, platform, automation) in the UK and remote. Email is the
          fastest way to reach me.
        </p>
      </section>

      <div className="contact-layout">
        <div className="panel contact-main">
          <Avatar size={64} />
          <h2 className="h-md">{profile.name}</h2>
          <p className="muted inline">
            <Pin width={14} height={14} /> {profile.location}
          </p>
          <div className="email-box">
            <Mail width={18} height={18} />
            <span>{profile.email}</span>
          </div>
          <div className="row-btns">
            <a className="btn-primary" href={`mailto:${profile.email}`}>
              <Mail width={16} height={16} /> Send an email
            </a>
            <button className="btn-ghost" onClick={copy} aria-live="polite">
              {copied ? <Check width={16} height={16} /> : <Copy width={16} height={16} />}
              {copied ? 'Copied' : 'Copy address'}
            </button>
          </div>
        </div>

        <div className="channels">
          {channels.map(({ label, handle, href, Icon }) => (
            <a className="channel" key={label} href={href} target="_blank" rel="noreferrer">
              <span className="service-icon">
                <Icon width={18} height={18} />
              </span>
              <span>
                <strong>{label}</strong>
                <span className="muted">{handle}</span>
              </span>
              <External width={16} height={16} className="muted" />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
