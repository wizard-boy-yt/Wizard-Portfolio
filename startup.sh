#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Install PM2 globally if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Start the application with PM2
echo "Starting application with PM2..."
pm2 start ecosystem.config.js

# Save the PM2 process list
pm2 save

# Setup PM2 to start on system boot
echo "Setting up PM2 to start on system boot..."
pm2 startup

echo "Application is now running on http://100.127.111.97:1000"
echo "To check status, run: pm2 status"
echo "To view logs, run: pm2 logs sdnayak-website"