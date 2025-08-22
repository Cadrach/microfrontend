import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { counterState } from './counterState'

// Export counterState for cross-microfrontend imports
export { counterState }

let reactRoot: Root | null = null

export const bootstrap = () => Promise.resolve()

export const mount = (props: any) => {
  const domElement = document.getElementById('single-spa-application:@mf/app2')
  if (domElement) {
    reactRoot = createRoot(domElement)
    reactRoot.render(<App />)
  }
  return Promise.resolve()
}

export const unmount = (props: any) => {
  if (reactRoot) {
    reactRoot.unmount()
    reactRoot = null
  }
  return Promise.resolve()
}

// For standalone development
if (!window.singleSpaNavigate) {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    const root = createRoot(rootElement)
    root.render(<App />)
  }
}
