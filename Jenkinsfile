pipeline {
    agent any
    
    stages {
        stage('Build and Deploy') {
            steps {
                script {
                    // Build and deploy the React app using Docker
                    docker.build('my-react-app', '-f Dockerfile .')
                    docker.image('my-react-app').run('-p 8080:80 -d')
                }
            }
        }
    }
}
