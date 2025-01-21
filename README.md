# CI/CD Pipeline with GitHub Actions and Docker

This project demonstrates a simple CI/CD pipeline using GitHub Actions to build and test a Dockerized web application. 
The application is a static website built with HTML, CSS, and JavaScript, served using Nginx.

## Prerequisites
- Docker installed on your machine
- Git installed
- A GitHub account

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Formation-alpho/Github-Action-dockerfile
   cd Github-Action-dovkerfile
   ```

2. Build the Docker image:
   ```bash
   docker build -t my-web-app .
   ```

3. Run the Docker container:
   ```bash
   docker run -d -p 8080:80 my-web-app
   ```

4. Open your browser and visit:
   ```
   http://localhost:8080
   ```

## CI/CD Pipeline

The GitHub Actions workflow file (`.github/workflows/ci-cd.yml`) automates the following steps:
1. Checks out the code from the repository.
2. Builds a Docker image for the application.
3. Runs the application in a Docker container.
4. Tests the application using `curl`.
5. Cleans up the Docker resources.

To trigger the pipeline, push changes to the `main` branch or create a pull request.

## Project Structure

```
.
├── Github-Action-dockerfile/
│   ├── index.html      # Main HTML file
│   ├── styles.css      # Stylesheet for the application
│   └── script.js       # JavaScript functionality
├── Dockerfile          # Docker configuration file
├── .github/
│   └── workflows/
│       └── ci-cd.yml   # GitHub Actions workflow
└── README.md           # Project documentation
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
