# 🚀 CI/CD Setup Guide

This guide will help you set up Continuous Integration and Continuous Deployment (CI/CD) for your web portfolio using GitHub Actions and Docker.

## 📋 Prerequisites

- GitHub repository with your code
- A server with Docker and Docker Compose installed
- SSH access to your server

## 🔧 Server Setup

### 1. Install Docker and Docker Compose

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker --version
docker-compose --version
```

### 2. Setup Project Directory

```bash
# Create project directory
mkdir -p ~/web-portofolio-frontend
cd ~/web-portofolio-frontend

# Clone your repository
git clone https://github.com/YOUR_USERNAME/web-portofolio-frontend.git .

# Make deploy script executable
chmod +x deploy.sh
```

## 🔐 GitHub Secrets Configuration

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add the following secrets:

| Secret Name | Description | Example Value |
|-------------|-------------|---------------|
| `SERVER_HOST` | Your server IP address | `203.0.113.1` |
| `SERVER_USER` | SSH username | `ubuntu` |
| `SERVER_SSH_KEY` | Private SSH key | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `SERVER_PORT` | SSH port (optional) | `22` |

### Generating SSH Key (if needed)

```bash
# On your local machine
ssh-keygen -t ed25519 -C "github-actions"

# Copy public key to server
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@your-server-ip

# Copy private key content for GitHub secret
cat ~/.ssh/id_ed25519
```

## 🏗️ Docker Configuration

### Production Deployment (docker-compose.yml)
- Uses pre-built image from GitHub Container Registry
- Includes health checks
- Auto-restart policy
- Production optimized

### Local Development (docker-compose.dev.yml)
- Builds image locally
- Development-friendly configuration
- Optional volume mounts for hot reloading

## 🚀 Deployment Options

### Option 1: Automatic Deployment (Recommended)

Push to `main` branch triggers automatic deployment:

```bash
git add .
git commit -m "Deploy changes"
git push origin main
```

### Option 2: Manual Deployment

SSH to your server and run:

```bash
cd ~/web-portofolio-frontend
./deploy.sh
```

### Option 3: Direct Docker Commands

```bash
# Pull latest image
docker pull ghcr.io/rihanodev/web-portofolio-frontend:latest

# Stop current container
docker-compose down

# Start new container
docker-compose up -d
```

## 📊 Monitoring and Maintenance

### View Application Logs
```bash
docker-compose logs -f web
```

### Check Container Status
```bash
docker-compose ps
```

### Update Application
```bash
./deploy.sh
```

### Stop Application
```bash
docker-compose down
```

### Clean Up Old Images
```bash
docker image prune -f
```

## 🔒 Security Considerations

1. **Firewall Configuration**
   ```bash
   # Allow only necessary ports
   sudo ufw allow 22    # SSH
   sudo ufw allow 8080  # Application
   sudo ufw enable
   ```

2. **SSL/TLS Setup** (Recommended)
   - Use reverse proxy (Nginx/Traefik)
   - Configure Let's Encrypt SSL certificates
   - Redirect HTTP to HTTPS

3. **Regular Updates**
   ```bash
   # Update system packages
   sudo apt update && sudo apt upgrade -y
   
   # Update Docker images
   docker pull ghcr.io/rihanodev/web-portofolio-frontend:latest
   ```

## 🐛 Troubleshooting

### Common Issues

1. **Permission Denied**
   ```bash
   sudo chown -R $USER:$USER ~/web-portofolio-frontend
   ```

2. **Port Already in Use**
   ```bash
   # Find process using port 8080
   sudo lsof -i :8080
   
   # Kill process if necessary
   sudo kill -9 <PID>
   ```

3. **Container Fails to Start**
   ```bash
   # Check logs
   docker-compose logs web
   
   # Check container status
   docker ps -a
   ```

4. **Image Pull Fails**
   ```bash
   # Login to GitHub Container Registry
   echo $GITHUB_TOKEN | docker login ghcr.io -u YOUR_USERNAME --password-stdin
   ```

## 📈 Performance Optimization

### Nginx Configuration
- Gzip compression enabled
- Static asset caching
- Security headers
- Client-side routing support

### Docker Optimization
- Multi-stage build
- Minimal base image (Alpine Linux)
- Non-root user
- Health checks

## 🔄 Workflow Details

The CI/CD pipeline includes:

1. **Continuous Integration**
   - Code checkout
   - Dependency installation
   - Type checking
   - Build verification
   - Artifact creation

2. **Docker Build**
   - Multi-platform build (AMD64/ARM64)
   - Image optimization
   - Registry push
   - Caching for faster builds

3. **Continuous Deployment**
   - Server connection via SSH
   - Image deployment
   - Health verification
   - Cleanup old resources

## 📞 Support

If you encounter issues:

1. Check the [GitHub Actions logs](https://github.com/YOUR_USERNAME/web-portofolio-frontend/actions)
2. Review Docker container logs: `docker-compose logs web`
3. Verify server resources: `htop`, `df -h`
4. Test network connectivity: `curl -f http://localhost:8080`

---

## 🎉 Quick Start

1. Configure GitHub secrets
2. Push to `main` branch
3. Monitor GitHub Actions
4. Access your application at `http://your-server-ip:8080`

Your portfolio is now automatically deployed! 🚀
