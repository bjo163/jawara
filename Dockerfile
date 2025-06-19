# Multi-stage build untuk optimasi size
FROM node:18-alpine AS base
RUN npm install -g pnpm

# Dependencies stage
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --production=false

# Builder stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Production stage - minimal image
FROM node:18-alpine AS runner
WORKDIR /app

# Install pnpm minimal
RUN npm install -g pnpm

# Create user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000
ENV PORT=3000 NODE_ENV=production NEXT_TELEMETRY_DISABLED=1

CMD ["node", "server.js"]
