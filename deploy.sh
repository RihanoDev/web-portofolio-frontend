#!/bin/bash

# Deployment script for web-portofolio-frontend
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment of web-portofolio-frontend..."

# Configuration
PROJECT_DIR="/home/$(whoami)/web-portofolio-frontend"
IMAGE_NAME="rihanodev/web-porto-frontend"
CONTAINER_NAME="web-porto"
VERSION=${1:-latest}
PORT=80

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker first."
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install it first."
    exit 1
fi

# Create project directory if it doesn't exist
if [ ! -d "$PROJECT_DIR" ]; then
    print_status "Creating project directory..."
    mkdir -p "$PROJECT_DIR"
    cd "$PROJECT_DIR"
    
    # Initialize git repository
    git clone https://github.com/RihanoDev/web-portofolio-frontend.git .
else
    cd "$PROJECT_DIR"
    print_status "Updating project repository..."
    git pull origin main
fi

# Pull the latest image
print_status "Pulling latest Docker image..."
docker pull "$IMAGE_NAME"

# Stop existing container
print_status "Stopping existing container..."
docker-compose down --remove-orphans

# Start new container
print_status "Starting new container..."
docker-compose up -d

# Wait for container to be ready
print_status "Waiting for container to be ready..."
sleep 15

# Health check
print_status "Performing health check..."
if curl -f -s http://localhost:8080 > /dev/null; then
    print_status "✅ Deployment successful! Application is running on http://localhost:8080"
else
    print_error "❌ Health check failed. Please check the logs:"
    docker-compose logs web
    exit 1
fi

# Clean up old images
print_status "Cleaning up old Docker images..."
docker image prune -f

# Show running containers
print_status "Current running containers:"
docker-compose ps

print_status "🎉 Deployment completed successfully!"
print_status "📊 Application status:"
print_status "   - URL: http://localhost:8080"
print_status "   - Container: $CONTAINER_NAME"
print_status "   - Image: $IMAGE_NAME"

echo ""
print_status "📝 Useful commands:"
echo "   - View logs: docker-compose logs -f web"
echo "   - Stop application: docker-compose down"
echo "   - Restart application: docker-compose restart"
echo "   - Update application: ./deploy.sh"
