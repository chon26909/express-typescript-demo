pipeline {
    
    agent any

    environment { 
        image = 'chon26909/test'
        registry = "docker.io"
    }
 
    stages {
 
        stage('Checkout SCM'){
            steps {
               checkout scm
            }
        }
 
        stage('Print ENV') {
            steps {
                sh('ls -al')
                sh('printenv')
            }
        }
 
        stage('Build') {
            steps {
                script {
                    // docker.withRegistry('', 'dockerhub') {
                    //     def slackImage = docker.build("${env.image}:${BUILD_NUMBER}")
                    //     slackImage.push()
                    //     slackImage.push('latest')
                    // }
                    sh('docker build -t express-typescript-demo-server .')
                }
            }
        }
 
 
        stage('Deploy') {
            steps{
                sh('docker ps')
            }
        }
    }
}
