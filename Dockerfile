FROM node:20-alpine

# Install curl or wget for healthcheck (alpine includes wget by default)
WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json ./

# Install dependencies (including devDependencies needed for build)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Set environment to production
ENV NODE_ENV=production

# Build the Next.js application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
