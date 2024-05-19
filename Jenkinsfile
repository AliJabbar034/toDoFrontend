pipeline {
    agent {
        docker {
            image 'node:alpine'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
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
                    docker.build('alijabbar/tsefront:latest')
                }
            }
        }
        stage('Run') {
            steps {
                script {
                    docker.image('alijabbar/tsefront:latest').run('-p 80:80')
                }
            }
        }
    }
}
