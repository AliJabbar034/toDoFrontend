pipeline {
    agent any
    environment {
        GIT_REPO = 'https://github.com/AliJabbar034/toDoFrontend.git'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "${env.GIT_REPO}"
            }
        }
        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    def customImage = docker.build('alijabbar/tsefront:latest')
                }
            }
        }
        stage('Run') {
            steps {
                script {
                    // Run the Docker container
                    def runContainer = docker.image('alijabbar/tsefront:latest').run('-p 80:80')
                }
            }
        }
    }
}
