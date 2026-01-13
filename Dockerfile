# Use a smaller production-friendly base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lockfile first (better cache)
COPY package*.json ./

RUN npm install

# Copy full project
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Serve production build
CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "3000"]
