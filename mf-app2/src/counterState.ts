// Shared counter state for cross-microfrontend communication
let counterValue = 0
const subscribers: Array<(value: number) => void> = []

export const counterState = {
  getValue: () => counterValue,
  setValue: (value: number) => {
    counterValue = value
    subscribers.forEach(callback => callback(value))
  },
  subscribe: (callback: (value: number) => void) => {
    subscribers.push(callback)
    return () => {
      const index = subscribers.indexOf(callback)
      if (index > -1) {
        subscribers.splice(index, 1)
      }
    }
  }
}