# Code Quality Setup

This project uses Husky, lint-staged, and SonarQube for maintaining code quality.

## Git Hooks (Husky)

### Pre-commit Hook

- Runs ESLint with auto-fix
- Runs Prettier formatting
- Only processes staged files (lint-staged)

### Pre-push Hook

- Runs full quality check: lint + format:check + build
- Ensures code passes all checks before pushing

### Commit Message Hook

- Validates commit messages follow conventional commit format
- Allowed types: feat, fix, docs, style, refactor, perf, test, chore, ci, build, revert

### Example Commit Messages

```bash
feat: add user authentication system
fix: resolve navigation bug on mobile
docs: update API documentation
style: format code with prettier
refactor: optimize database queries
```

## Available Scripts

```bash
# Format code
pnpm format

# Check formatting without changes
pnpm format:check

# Run linting with auto-fix
pnpm lint

# Run full quality check
pnpm quality-check

# Run SonarQube analysis locally (requires SonarQube server)
pnpm sonar:local

# Run SonarQube analysis with custom server
pnpm sonar
```

## SonarQube Setup

### Local Development

1. Install SonarQube server:

   ```bash
   docker run -d --name sonarqube -p 9000:9000 sonarqube:latest
   ```

2. Access SonarQube at http://localhost:9000

   - Default credentials: admin/admin

3. Create a new project with key: `jawara-net`

4. Generate a token and run analysis:
   ```bash
   SONAR_TOKEN=your_token pnpm sonar:local
   ```

### CI/CD (GitHub Actions)

Add these secrets to your GitHub repository:

- `SONAR_TOKEN`: SonarQube authentication token
- `SONAR_HOST_URL`: SonarQube server URL

The CI pipeline automatically:

- Runs linting and formatting checks
- Performs type checking with build
- Sends analysis to SonarQube
- Checks quality gate status

## Quality Metrics

SonarQube analyzes:

- **Bugs**: Logic errors that could cause runtime issues
- **Vulnerabilities**: Security-related issues
- **Code Smells**: Maintainability issues
- **Coverage**: Test coverage percentage
- **Duplications**: Code duplication percentage
- **Maintainability**: Technical debt ratio

## Bypassing Hooks (Emergency)

If you need to bypass hooks in emergency situations:

```bash
# Skip pre-commit hook
git commit --no-verify -m "emergency fix"

# Skip pre-push hook
git push --no-verify
```

**Note**: Use sparingly and fix issues immediately after.
