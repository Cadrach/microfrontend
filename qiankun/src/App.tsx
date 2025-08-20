import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <h1>Qiankun Main Application</h1>
          <nav style={{ marginTop: '10px' }}>
            <Link to="/app1" style={{ marginRight: '20px', color: '#646cff', textDecoration: 'none' }}>
              Sub App 1
            </Link>
            <Link to="/app2" style={{ marginRight: '20px', color: '#646cff', textDecoration: 'none' }}>
              Sub App 2
            </Link>
            <Link to="/" style={{ color: '#646cff', textDecoration: 'none' }}>
              Home
            </Link>
          </nav>
        </header>
        
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={
              <div>
                <h2>Welcome to Qiankun Microfrontend</h2>
                <p>This is the main application. Use the navigation above to load micro-applications.</p>
              </div>
            } />
            <Route path="/app1/*" element={<div id="subapp-container"></div>} />
            <Route path="/app2/*" element={<div id="subapp-container"></div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
