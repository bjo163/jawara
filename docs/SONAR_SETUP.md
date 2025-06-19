# SonarQube Setup Guide

## Prerequisites

1. **SonarQube Server** atau **SonarCloud Account**

   - Local: Download SonarQube Community Edition dari
     https://www.sonarqube.org/downloads/
   - Cloud: Daftar di https://sonarcloud.io/

2. **SonarQube Scanner**

   ```bash
   # Install SonarQube Scanner CLI
   npm install -g sonarqube-scanner

   # Atau gunakan npx untuk menjalankan tanpa install global
   npx sonar-scanner
   ```

## Setup Local SonarQube

1. **Start SonarQube Server**

   ```bash
   # Download dan extract SonarQube
   # Jalankan server
   bin/windows-x86-64/StartSonar.bat  # Windows
   bin/macosx-universal-64/sonar.sh start  # macOS
   bin/linux-x86-64/sonar.sh start  # Linux
   ```

2. **Access SonarQube**

   - URL: http://localhost:9000
   - Default login: admin/admin

3. **Create Project**
   - Create new project manually
   - Generate project token
   - Copy project key

## Setup SonarCloud

1. **Import Project**

   - Login ke SonarCloud
   - Import project dari GitHub
   - Generate token

2. **Configure Repository**
   - Set project key di sonar-project.properties
   - Add secrets di GitHub repository settings

## Environment Variables

Buat file `.env.local` (jangan commit ke git):

```env
# SonarQube Configuration
SONAR_TOKEN=your_sonar_token_here
SONAR_HOST_URL=http://localhost:9000  # atau https://sonarcloud.io
SONAR_ORGANIZATION=your_org_name  # hanya untuk SonarCloud
```

## Running Analysis

```bash
# Local analysis
pnpm run sonar

# Dengan parameter custom
sonar-scanner \
  -Dsonar.projectKey=jawara-net \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=your_token

# Full analysis pipeline
pnpm run analyze
```

## GitHub Actions Integration

Buat file `.github/workflows/sonar.yml`:

```yaml
name: SonarCloud Analysis

on:
  push:
    branches: [main, develop]
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  sonarcloud:
    name: SonarCloud
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Run tests and coverage
        run: pnpm run test:coverage # jika ada test

      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

## Configuration Files

File yang telah dibuat:

- `sonar-project.properties` - Konfigurasi project SonarQube
- `.env.local` - Environment variables (buat manual)
- `package.json` - Scripts untuk menjalankan analysis

## Quality Gates

SonarQube akan mengecek:

- **Code Coverage** - Minimal coverage percentage
- **Duplicated Code** - Percentage duplikasi kode
- **Maintainability Rating** - Code smells dan technical debt
- **Reliability Rating** - Bugs dan potential bugs
- **Security Rating** - Security vulnerabilities dan hotspots

## Tips

1. **Exclude Files**: Update `sonar.exclusions` di sonar-project.properties
2. **Coverage Reports**: Pastikan generate coverage reports untuk test
3. **Regular Scanning**: Setup CI/CD untuk automatic scanning
4. **Quality Gates**: Set quality gates sesuai standar team
5. **Security**: Jangan commit SONAR_TOKEN ke repository
