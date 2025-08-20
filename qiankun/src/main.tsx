import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'react-app-1',
    entry: '//localhost:3001',
    container: '#subapp-container',
    activeRule: '/app1',
  },
  {
    name: 'react-app-2',
    entry: '//localhost:3002',
    container: '#subapp-container',
    activeRule: '/app2',
  },
]

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
  },
  beforeMount: (app) => {
    console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
  },
  afterUnmount: (app) => {
    console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
  },
})

start()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
