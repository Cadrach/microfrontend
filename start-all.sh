#!/bin/bash

# Get the script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Starting all applications..."

# Start main application
echo "Starting main application on port 3000..."
cd "$SCRIPT_DIR/qiankun" && npm run dev &
MAIN_PID=$!

# Wait a bit for the main app to start
sleep 5

# Start react-app-1
echo "Starting react-app-1 on port 3001..."
cd "$SCRIPT_DIR/react-app-1" && npm run dev &
APP1_PID=$!

# Wait a bit
sleep 5

# Start react-app-2  
echo "Starting react-app-2 on port 3002..."
cd "$SCRIPT_DIR/react-app-2" && npm run dev &
APP2_PID=$!

echo "All applications started!"
echo "Main app: http://localhost:3000"
echo "React App 1: http://localhost:3001" 
echo "React App 2: http://localhost:3002"
echo ""
echo "Press Ctrl+C to stop all applications"

# Function to cleanup on exit
cleanup() {
    echo "Stopping all applications..."
    kill $MAIN_PID $APP1_PID $APP2_PID 2>/dev/null
    exit
}

trap cleanup INT

# Keep script running
wait