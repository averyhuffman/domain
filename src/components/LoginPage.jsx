import { useState } from 'react'
import './LoginPage.css'

export default function LoginPage({ onLogin }) {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please enter your email and password.')
      return
    }
    setLoading(true)
    // Simulate auth — replace with real API call
    setTimeout(() => {
      setLoading(false)
      onLogin({ email })
    }, 800)
  }

  return (
    <div className="login-bg">
      {/* Background blueprint tiles */}
      <div className="login-overlay" />

      <div className="login-card">
        {/* Logos */}
        <div className="login-logos">
          <img
            src="https://i.imgur.com/placeholder-goose.png"
            alt="Flock Fantasy"
            className="login-logo-goose"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <span className="login-logo-divider">✕</span>
          <div className="login-logo-shield">
            <svg width="48" height="56" viewBox="0 0 48 56" fill="none">
              <path d="M24 0L0 8V28C0 42 12 52 24 56C36 52 48 42 48 28V8L24 0Z" fill="#1a2235" stroke="#f97316" strokeWidth="2"/>
              <path d="M24 6L6 12V28C6 39 14 47 24 50C34 47 42 39 42 28V12L24 6Z" fill="#111827"/>
              <rect x="18" y="22" width="12" height="14" rx="2" fill="#f97316"/>
              <circle cx="24" cy="20" r="4" fill="#f97316"/>
            </svg>
          </div>
        </div>

        <h1 className="login-title">BLUEPRINT DASHBOARD LOGIN</h1>
        <p className="login-subtitle">
          Login using the same email and password used on the Flock Fantasy website
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <a href="#" className="login-help">Need help?</a>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>
        </form>
      </div>
    </div>
  )
}
