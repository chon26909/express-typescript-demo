pipeline {
    
    agent {
        label 'dev'
    }

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
                    docker build -t express-typescript-demo-server .
                }
            }
        }
 
 
        stage('Deploy') {
            steps{
                echo 'Deploy'
                docker ps
            }
        }
    }
}
