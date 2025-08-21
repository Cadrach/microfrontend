import { registerApplication, start } from 'single-spa'
import './App.css'

registerApplication({
  name: '@mf/app1',
  app: async () => {
    const module = await import('http://localhost:3001/src/main.tsx')
    return module
  },
  activeWhen: ['/app1', '/both']
})

registerApplication({
  name: '@mf/app2', 
  app: async () => {
    const module = await import('http://localhost:3002/src/main.tsx')
    return module
  },
  activeWhen: ['/app2', '/both']
})

start({
  urlRerouteOnly: true
})
