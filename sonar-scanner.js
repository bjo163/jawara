const scanner = require('sonarqube-scanner')

scanner(
  {
    serverUrl: process.env.SONAR_HOST_URL || 'http://localhost:9000',
    token: process.env.SONAR_TOKEN || '',
    options: {
      'sonar.projectKey': 'jawara-net',
      'sonar.projectName': 'Jawara Net - ISP Website',
      'sonar.projectVersion': '1.0',
      'sonar.sources': 'app,components,data,hooks,lib',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.exclusions': [
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/node_modules/**',
        '**/.next/**',
        '**/dist/**',
        '**/build/**',
        '**/coverage/**',
        '**/*.d.ts'
      ].join(','),
      'sonar.typescript.node': 'node',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
    }
  },
  () => process.exit()
)
