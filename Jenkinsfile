pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/luizreboucas/simpleNodeForJenkinsLaboratory', branch: 'main')
      }
    }

    stage('see content') {
      steps {
        sh 'ls'
      }
    }

  }
}