# End-to-End CI/CD Pipeline Implementation

This project demonstrates an end-to-end CI/CD pipeline using Jenkins, Docker, and Kubernetes for scalable application deployment.

## Project Overview

A simple Node.js Express web application is created and containerized using Docker. The application source code is stored in GitHub. Jenkins is used to automate the CI/CD pipeline, including dependency installation, testing, Docker image creation, container execution, and Kubernetes deployment.

## Technologies Used

- GitHub
- Jenkins
- Docker
- Kubernetes
- Node.js
- Express.js
- VS Code

## Pipeline Stages

1. Checkout source code from GitHub
2. Install Node.js dependencies
3. Run test command
4. Build Docker image
5. Run Docker container
6. Deploy application to Kubernetes

## Docker Details

Docker is used to containerize the Node.js application. The Docker image is built using the Dockerfile and the container runs on port 3000.

## Kubernetes Details

Kubernetes deployment uses 2 replicas for scalability. A NodePort service exposes the application on port 30080.

## Application URL

Local Docker URL:

http://localhost:3000

Kubernetes URL using port-forward:

http://localhost:30080

## Output

The application displays a web page confirming successful deployment using Jenkins, Docker, and Kubernetes.