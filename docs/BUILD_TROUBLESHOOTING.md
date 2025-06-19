# Build Troubleshooting Guide

## Windows Build Issues Fixed

### Problem 1: WasmHash TypeError

**Error**: `TypeError: Cannot read properties of undefined (reading 'length')`
**Cause**: Corrupted webpack cache or dependency issues **Solution**: Clear
cache and reinstall dependencies

```bash
# Clear Next.js cache
Remove-Item -Recurse -Force ".next" -ErrorAction SilentlyContinue

# Clean pnpm store
pnpm store prune

# Reinstall dependencies
pnpm install
```

### Problem 2: Windows Symlink Permission Error

**Error**: `EPERM: operation not permitted, symlink` **Cause**: Next.js
`output: "standalone"` requires symlink creation which needs elevated
permissions on Windows **Solution**: Remove standalone output or use alternative
deployment methods

#### Option 1: Remove Standalone Output (Current Solution)

```javascript
// next.config.mjs
const nextConfig = {
  // Comment out standalone output
  // output: "standalone",
  // ... other config
};
```

#### Option 2: Enable Developer Mode (Alternative)

1. Open Windows Settings → Update & Security → For developers
2. Enable "Developer Mode"
3. Restart your terminal/IDE

#### Option 3: Use npm instead of pnpm (Alternative)

```bash
# Remove pnpm lock file
rm pnpm-lock.yaml

# Install with npm
npm install

# Build with npm
npm run build
```

#### Option 4: Run with Administrator Privileges (Alternative)

- Right-click PowerShell/CMD → "Run as administrator"
- Run build command with elevated permissions

## Docker Deployment Considerations

If you need standalone output for Docker deployment:

1. **Use npm instead of pnpm** in your Docker container
2. **Run Docker build on Linux** (no symlink issues)
3. **Use multi-stage builds** to avoid standalone output requirement

Example Dockerfile without standalone:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Build Success Indicators

✅ **Successful build output should show:**

- `✓ Compiled successfully`
- `✓ Collecting page data`
- `✓ Generating static pages`
- `✓ Finalizing page optimization`
- Route information with sizes

## Troubleshooting Steps

1. **Clear all caches**

   ```bash
   Remove-Item -Recurse -Force ".next"
   pnpm store prune
   ```

2. **Reinstall dependencies**

   ```bash
   pnpm install
   ```

3. **Check Node.js version compatibility**

   ```bash
   node --version  # Should be 18.x or higher
   ```

4. **Verify build**

   ```bash
   pnpm run build
   ```

5. **Test production server**
   ```bash
   pnpm start
   ```

## Environment Information

- **Node.js**: v22.11.0 ✅
- **pnpm**: v10.9.0 ✅
- **Next.js**: 15.2.4 ✅
- **OS**: Windows ⚠️ (symlink limitations)

## Additional Notes

- The original webpack WasmHash error was resolved by clearing caches
- Windows symlink permissions are a known limitation with pnpm + Next.js
  standalone builds
- The application builds and runs successfully without standalone output
- For production deployment, consider the Docker alternatives mentioned above
