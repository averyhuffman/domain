import { useState } from 'react'
import './Dashboard.css'

// ─── Sample data ───────────────────────────────────────────────────────────────

const BLUEPRINTS = [
  { id: 1, team: 'Blueprint team name', date: 'Oct 21, 2025', color: '#f97316' },
  { id: 2, team: 'Blueprint team name', date: 'Oct 21, 2025', color: '#3b82f6' },
  { id: 3, team: 'Blueprint team name', date: 'Oct 21, 2025', color: '#eab308' },
  { id: 4, team: 'Blueprint team name', date: 'Oct 21, 2025', color: '#a855f7' },
  { id: 5, team: 'Blueprint team name', date: 'Oct 21, 2025', color: '#22c55e' },
  { id: 6, team: 'Blueprint team name', date: 'Oct 21, 2025', color: '#ef4444' },
]

const INFINITE_BLUEPRINTS = [
  { id: 1, team: 'Blueprint team name', date: 'Oct 21, 2025' },
  { id: 2, team: 'Blueprint team name', date: 'Oct 21, 2025' },
  { id: 3, team: 'Blueprint team name', date: 'Oct 21, 2025' },
]

const RESOURCES = [
  { id: 1, title: 'HOW TO USE YOUR BLUEPRINT', label: 'LIVE START-UP', sublabel: 'DYNASTY DOMAIN', bg: '#1a3a5c' },
  { id: 2, title: 'HOW TO USE YOUR BLUEPRINT', label: 'BLUEPRINTS', sublabel: '',              bg: '#2a1a4a' },
  { id: 3, title: 'HOW TO USE YOUR BLUEPRINT', label: 'ADVANCED TIPS', sublabel: '',           bg: '#1a3a2c' },
]

const STATUS_STEPS = [
  { num: 1, label: 'submitted', color: '#ef4444',  active: true  },
  { num: 2, label: 'queued',    color: '#f97316',  active: true  },
  { num: 3, label: 'in progress', color: '#60a5fa', active: false },
  { num: 4, label: 'sent',      color: '#22c55e',  active: false },
]

// ─── Shield icon ───────────────────────────────────────────────────────────────
function ShieldIcon({ color = '#f97316', size = 36 }) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 40 46" fill="none">
      <path d="M20 0L0 7V23C0 35 10 43 20 46C30 43 40 35 40 23V7L20 0Z" fill="#1a2235" stroke={color} strokeWidth="1.5"/>
      <path d="M20 5L4 11V23C4 32 11 39 20 42C29 39 36 32 36 23V11L20 5Z" fill="#111827"/>
      <rect x="14" y="18" width="12" height="13" rx="2" fill={color}/>
      <circle cx="20" cy="16" r="4" fill={color}/>
    </svg>
  )
}

// ─── Blueprint card (standard) ─────────────────────────────────────────────────
function BlueprintCard({ team, date, color }) {
  return (
    <div className="bp-card">
      <div className="bp-card-header">
        <ShieldIcon color={color} size={36} />
        <div className="bp-card-info">
          <span className="bp-card-name">{team}</span>
          <span className="bp-card-date">{date}</span>
        </div>
      </div>
      <button className="bp-download-btn">DOWNLOAD</button>
    </div>
  )
}

// ─── Infinite blueprint card ───────────────────────────────────────────────────
function InfiniteBlueprintCard({ team, date }) {
  return (
    <div className="bp-card bp-card--infinite">
      <div className="bp-card-header">
        <div className="bp-card-thumb">
          <div className="bp-card-thumb-inner">
            <div className="thumb-row" /><div className="thumb-row" /><div className="thumb-row" />
            <div className="thumb-row thumb-row--highlight" />
            <div className="thumb-row" /><div className="thumb-row" />
          </div>
        </div>
        <div className="bp-card-info">
          <span className="bp-card-name">{team}</span>
          <span className="bp-card-date">{date}</span>
        </div>
      </div>
      <button className="bp-download-btn">DOWNLOAD</button>
    </div>
  )
}

// ─── Status Tracker ────────────────────────────────────────────────────────────
function StatusTracker() {
  return (
    <div className="tracker-card">
      <h2 className="tracker-title">
        BLUEPRINT STATUS TRACKER&nbsp;
        <span role="img" aria-label="search">🔍</span>
      </h2>

      <p className="tracker-subtitle">Blueprint Team Name | Submitted: 10/21/2025</p>

      <div className="tracker-steps">
        {STATUS_STEPS.map((step) => (
          <div
            key={step.num}
            className="tracker-step"
            style={{ background: step.active ? step.color : '#1e3a5c' }}
          >
            <span className="tracker-step-num">{step.num}</span>
            <span className="tracker-step-label">{step.label}</span>
          </div>
        ))}
      </div>

      <div className="tracker-meta">
        <span className="tracker-status">
          Current status: <strong style={{ color: '#f97316' }}>QUEUED</strong>
        </span>
        <span className="tracker-updated">Last updated 10/23/2025 11:58PM EST</span>
      </div>

      <div className="tracker-actions">
        <button className="tracker-buy-btn">
          <span className="tracker-buy-icon">🛒</span>
          <span>BUY A<br />BLUEPRINT</span>
        </button>
        <div className="tracker-wait">
          <span className="tracker-wait-clock">🕐</span>
          <div>
            <div className="tracker-wait-label">CURRENT WAIT TIME:</div>
            <div className="tracker-wait-time">3-5 DAYS</div>
          </div>
        </div>
      </div>

      <div className="tracker-links">
        <button className="tracker-link-btn">⚙️ SUBMIT A TICKET</button>
        <button className="tracker-link-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: 6}}>
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.01.043.025.057a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
          </svg>
          DYNASTY COMMUNITY
        </button>
      </div>

      <div className="resources-section">
        <h3 className="resources-title">LEARNING &amp; RESOURCES 💡</h3>
        <ResourceCarousel />
      </div>
    </div>
  )
}

// ─── Resource Carousel ─────────────────────────────────────────────────────────
function ResourceCarousel() {
  const [index, setIndex] = useState(0)
  const visible = 2
  const max = RESOURCES.length - visible

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(max, i + 1))

  return (
    <div className="carousel">
      <button className="carousel-arrow carousel-arrow--left" onClick={prev} disabled={index === 0}>‹</button>
      <div className="carousel-track">
        {RESOURCES.slice(index, index + visible).map((r) => (
          <div key={r.id} className="carousel-item" style={{ background: r.bg }}>
            <div className="carousel-label">{r.label}</div>
            {r.sublabel && <div className="carousel-sublabel">{r.sublabel}</div>}
            <p className="carousel-caption">{r.title}</p>
          </div>
        ))}
      </div>
      <button className="carousel-arrow carousel-arrow--right" onClick={next} disabled={index >= max}>›</button>
    </div>
  )
}

// ─── Main Dashboard ────────────────────────────────────────────────────────────
export default function Dashboard({ user, onLogout }) {
  const userName = user?.email?.split('@')[0]?.toUpperCase() ?? 'USER'

  return (
    <div className="dashboard">
      {/* ── Header ── */}
      <header className="dash-header">
        <div className="dash-header-left">
          <div className="dash-logo">
            <ShieldIcon color="#f97316" size={32} />
            <span className="dash-logo-text">
              <span className="dash-logo-dynasty">DYNASTY</span>
              {' '}
              <span className="dash-logo-domain">DOMAIN</span>
            </span>
          </div>
          <div className="dash-header-divider" />
          <h1 className="dash-header-title">BLUEPRINT DASHBOARD</h1>
        </div>

        <div className="dash-header-right">
          <button className="dash-livestream-btn">
            <span className="livestream-dot" />
            GET A LIVE STREAM BP
          </button>
          <div className="dash-user-menu">
            <span>▾ DOMAIN</span>
            <div className="dash-user-avatar">
              <span>👤</span>
            </div>
            <button className="dash-logout" onClick={onLogout} title="Sign out">✕</button>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="dash-body">
        {/* Left / Center */}
        <section className="dash-main">
          <div className="dash-welcome">
            <h2 className="dash-welcome-text">
              Welcome back, <span className="dash-welcome-name">{userName}</span>
            </h2>
            <p className="dash-welcome-sub">
              Track your blueprints, review all of your blueprints in one place, open a support ticket, and more!
            </p>
          </div>

          {/* My Blueprints */}
          <div className="section-header">
            <span className="section-title section-title--orange">MY BLUEPRINTS</span>
            <span className="section-icon">📋</span>
          </div>
          <div className="section-divider" />
          <div className="bp-grid">
            {BLUEPRINTS.map((bp) => (
              <BlueprintCard key={bp.id} {...bp} />
            ))}
          </div>

          {/* My Infinite Blueprints */}
          <div className="section-header" style={{ marginTop: 32 }}>
            <span className="section-title section-title--purple">MY INFINITE BLUEPRINTS</span>
          </div>
          <div className="section-divider" />
          <div className="bp-grid bp-grid--infinite">
            {INFINITE_BLUEPRINTS.map((bp) => (
              <InfiniteBlueprintCard key={bp.id} {...bp} />
            ))}
          </div>
        </section>

        {/* Right sidebar */}
        <aside className="dash-sidebar">
          <StatusTracker />
        </aside>
      </main>

      {/* ── Footer ── */}
      <footer className="dash-footer">
        © 2026 Domain Fantasy Football LLC
      </footer>
    </div>
  )
}
