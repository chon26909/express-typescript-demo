pipeline {
    
    agent any

    environment { 
        image = 'chon26909/test'
        registry = "docker.io"
    }
 
    stages {
 
        stage('Print ENV') {
            steps {
                sh('ls -al')
                sh('printenv')
            }
        }
 
        stage('Build') {
            steps {
                script {
                    sh('docker build -t express-typescript-demo-server .')
                }
            }
        }
 
 
        stage('Deploy') {
            steps{
                sh('docker ps')
                sh('docker-compose')
            }
        }
    }
}
