import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

const base = (p: P) => ({
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...p,
})

export const Briefcase = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
  </svg>
)

export const Layers = (p: P) => (
  <svg {...base(p)}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
)

export const Cap = (p: P) => (
  <svg {...base(p)}>
    <path d="m2 9 10-5 10 5-10 5L2 9Z" />
    <path d="M6 11v5c3 2 9 2 12 0v-5M22 9v5" />
  </svg>
)

export const Box = (p: P) => (
  <svg {...base(p)}>
    <path d="M21 8v8l-9 5-9-5V8l9-5 9 5Z" />
    <path d="m3 8 9 5 9-5M12 13v8" />
  </svg>
)

export const Spark = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
  </svg>
)

export const Badge = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="9" r="6" />
    <path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" />
  </svg>
)

export const Mail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const Arrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const Pin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const Close = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Download = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
  </svg>
)

export const Copy = (p: P) => (
  <svg {...base(p)}>
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
  </svg>
)

export const Check = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12 5 5 9-10" />
  </svg>
)

export const GitHub = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.4 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.1 10.1 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
  </svg>
)

export const LinkedIn = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2ZM8 19H5V9.5h3V19ZM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5ZM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12.8 13 12.8 14.3V19h-3V9.5h2.9v1.3a3.1 3.1 0 0 1 2.8-1.6c3 0 3.5 2 3.5 4.6V19Z" />
  </svg>
)

export const ArrowLeft = (p: P) => (
  <svg {...base(p)}>
    <path d="M19 12H5m0 0 6-6m-6 6 6 6" />
  </svg>
)

export const ArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14m0 0-6-6m6 6-6 6" />
  </svg>
)

export const External = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
)

export const Menu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Server = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
)

export const Workflow = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <path d="M10 6.5h4a3 3 0 0 1 3 3V14" />
  </svg>
)

export const Cpu = (p: P) => (
  <svg {...base(p)}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
  </svg>
)

export const XLogo = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
  </svg>
)
