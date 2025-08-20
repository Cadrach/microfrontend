import { registerApplication, start } from 'single-spa'

registerApplication({
  name: '@mf/app1',
  app: async () => {
    const module = await import('http://localhost:3001/src/main.tsx')
    return module
  },
  activeWhen: ['/app1']
})

registerApplication({
  name: '@mf/app2', 
  app: async () => {
    const module = await import('http://localhost:3002/src/main.tsx')
    return module
  },
  activeWhen: ['/app2']
})

start({
  urlRerouteOnly: true
})
