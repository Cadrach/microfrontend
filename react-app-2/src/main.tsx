import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let root: Root | null = null;

function render(props: any = {}) {
  const { container } = props;
  const rootElement = container ? container.querySelector('#root') : document.getElementById('root');
  
  if (!root) {
    root = createRoot(rootElement!);
  }
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

renderWithQiankun({
  bootstrap() {
    console.log('[react-app-2] react app bootstraped');
  },
  mount(props) {
    console.log('[react-app-2] props from main framework', props);
    render(props);
  },
  unmount(props) {
    const { container } = props;
    const rootElement = container ? container.querySelector('#root') : document.getElementById('root');
    
    if (root) {
      root.unmount();
      root = null;
    }
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
