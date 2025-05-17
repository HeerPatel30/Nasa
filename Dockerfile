# Use official Node.js Alpine image as builder
FROM node:lts-alpine AS builder

WORKDIR /app

# ✅ Ensure all deps including devDependencies are installed
ENV NODE_ENV=development

# Copy client package.json and lockfile
COPY client/package.json client/package-lock.json ./client/

# Install all dependencies including devDependencies (NO --production or --omit=dev)
RUN npm ci --prefix ./client

# Copy the full client source
COPY client ./client

# Build the React client
RUN npm run build --prefix ./client

# Now you can reset to production for runtime (optional)
ENV NODE_ENV=production

# Copy server package.json and lockfile
COPY server/package.json server/package-lock.json ./server/

# Install server dependencies
RUN npm ci --prefix ./server

# Copy full server source
COPY server ./server

# Final image
FROM node:lts-alpine

WORKDIR /app

# Copy built client
COPY --from=builder /app/client/build ./client/build

# Copy server folder with node_modules
COPY --from=builder /app/server ./server

# Use non-root user for security
USER node

# Expose your server port
EXPOSE 8000

# Start your server (which presumably serves React static files)
CMD ["npm", "start", "--prefix", "server"]
