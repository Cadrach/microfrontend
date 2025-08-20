# Qiankun Microfrontend with Vite

This project demonstrates a microfrontend architecture using qiankun with 2 React sub-applications, all built with Vite instead of Create React App.

## Project Structure

```
microfrontend/
├── qiankun/          # Main application (port 3000)
├── react-app-1/      # Sub-application 1 (port 3001)  
├── react-app-2/      # Sub-application 2 (port 3002)
├── start-all.sh      # Script to start all apps
└── package.json      # Root package.json
```

## Features

- **Main Application**: Qiankun main app with navigation and routing
- **Sub-Applications**: Two React apps that can be loaded dynamically
- **Vite Configuration**: All applications use Vite for fast development
- **Lifecycle Hooks**: Proper mount/unmount lifecycle management
- **Navigation**: React Router integration with microfrontend routing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies for all applications:
```bash
# Install root dependencies
npm install

# Install dependencies for all sub-projects
cd qiankun && npm install
cd ../react-app-1 && npm install  
cd ../react-app-2 && npm install
cd ..
```

### Running the Applications

#### Option 1: Use the start script
```bash
./start-all.sh
```

#### Option 2: Start manually in separate terminals

Terminal 1 - Main Application:
```bash
cd qiankun
npm run dev
```

Terminal 2 - React App 1:
```bash
cd react-app-1  
npm run dev
```

Terminal 3 - React App 2:
```bash
cd react-app-2
npm run dev
```

### Access the Applications

- **Main Application**: http://localhost:3000
- **Sub-Application 1**: http://localhost:3001 (standalone)
- **Sub-Application 2**: http://localhost:3002 (standalone)

Navigate to the main application and use the navigation links to load the micro-applications:
- `/app1` - Loads React Sub-App 1
- `/app2` - Loads React Sub-App 2

## Configuration Details

### Main Application (qiankun/)

- **Port**: 3000
- **Framework**: React + TypeScript + Vite
- **Dependencies**: qiankun, react-router-dom
- **Features**: 
  - Microfrontend registration
  - Routing configuration
  - Lifecycle management

### Sub-Applications (react-app-1/, react-app-2/)

- **Ports**: 3001, 3002
- **Framework**: React + TypeScript + Vite
- **Configuration**:
  - CORS enabled for cross-origin requests
  - Qiankun lifecycle hooks implemented
  - Conditional rendering (standalone vs microfrontend)

## Key Files

### Main Application
- `qiankun/src/main.tsx` - Qiankun registration and startup
- `qiankun/src/App.tsx` - Main navigation and routing
- `qiankun/vite.config.ts` - Vite configuration

### Sub-Applications  
- `*/src/main.tsx` - Lifecycle hooks implementation
- `*/vite.config.ts` - Vite configuration with CORS

## How It Works

1. The main application registers the sub-applications with qiankun
2. When navigating to `/app1` or `/app2`, qiankun loads the respective sub-application
3. Sub-applications expose lifecycle hooks (bootstrap, mount, unmount)
4. Each sub-application can run standalone or as a microfrontend

## Development Notes

- Each application runs on a different port to avoid conflicts
- CORS is enabled on sub-applications for cross-origin requests
- Sub-applications check for `window.__POWERED_BY_QIANKUN__` to determine if running as microfrontend
- All applications use Vite for fast hot module replacement during development