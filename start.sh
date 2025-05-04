#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Start the server
echo "Starting server on port 1000..."
node server.js