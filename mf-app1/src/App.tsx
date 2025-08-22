import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [app2Count, setApp2Count] = useState(0)

  useEffect(() => {
    // Import and subscribe to app2's counter state
    const subscribeToApp2Counter = async () => {
      try {
        const app2Module = await import('http://localhost:3002/src/main.tsx')
        const { counterState } = app2Module
        
        // Set initial value
        setApp2Count(counterState.getValue())
        
        // Subscribe to changes
        const unsubscribe = counterState.subscribe((value: number) => {
          setApp2Count(value)
        })
        
        return unsubscribe
      } catch (error) {
        console.error('Failed to connect to app2 counter:', error)
      }
    }
    
    subscribeToApp2Counter()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Microfrontend App 1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>App2 Counter: {app2Count}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
