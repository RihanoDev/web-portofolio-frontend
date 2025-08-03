# Makefile for web-portofolio-frontend

.PHONY: help build dev up down logs clean deploy health

# Default target
help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

# Development commands
install: ## Install dependencies
	npm install

dev: ## Run development server
	npm run dev

build: ## Build the application
	npm run build

preview: ## Preview production build
	npm run preview

# Docker commands
docker-build: ## Build Docker image locally
	docker build -t web-portofolio-frontend:local .

docker-dev: ## Run with docker-compose for development
	docker-compose -f docker-compose.dev.yml up -d

docker-prod: ## Run with docker-compose for production
	docker-compose up -d

up: docker-prod ## Alias for docker-prod

down: ## Stop and remove containers
	docker-compose down

restart: ## Restart containers
	docker-compose restart

logs: ## Show container logs
	docker-compose logs -f web

# Deployment commands
deploy: ## Deploy to server (requires SSH access)
	./deploy.sh

pull: ## Pull latest image from registry
	docker pull ghcr.io/rihanodev/web-portofolio-frontend:latest

# Maintenance commands
clean: ## Clean up Docker images and containers
	docker-compose down --remove-orphans
	docker image prune -f
	docker container prune -f

health: ## Check application health
	@echo "Checking application health..."
	@curl -f -s http://localhost:8080 > /dev/null && echo "✅ Application is healthy" || echo "❌ Application is not responding"

status: ## Show container status
	docker-compose ps

# CI/CD commands
ci-test: ## Run CI tests locally
	npm ci
	npm run build

ci-build: ## Build Docker image for CI
	docker build --platform linux/amd64,linux/arm64 -t ghcr.io/rihanodev/web-portofolio-frontend:latest .

# Environment setup
setup: ## Setup development environment
	@echo "Setting up development environment..."
	npm install
	@echo "✅ Development environment ready!"
	@echo "Run 'make dev' to start development server"

setup-server: ## Setup production server
	@echo "Setting up production server..."
	@echo "Please run this on your server:"
	@echo "curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh"
	@echo "sudo curl -L \"https://github.com/docker/compose/releases/latest/download/docker-compose-\$$(uname -s)-\$$(uname -m)\" -o /usr/local/bin/docker-compose"
	@echo "sudo chmod +x /usr/local/bin/docker-compose"
