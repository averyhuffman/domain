import { useState } from 'react'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'

export default function App() {
  const [user, setUser] = useState(null)

  const handleLogin  = (userData) => setUser(userData)
  const handleLogout = ()         => setUser(null)

  return user
    ? <Dashboard user={user} onLogout={handleLogout} />
    : <LoginPage onLogin={handleLogin} />
}
