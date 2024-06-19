# Step 1: Build the React application
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy the server package.json and package-lock.json
COPY package.json package-lock.json ./

# Install server dependencies
RUN npm install

# Copy the rest of the server application
COPY . .

# Change directory to the client and copy client package files
WORKDIR /app/client
COPY client/package.json client/package-lock.json ./

# Install client dependencies
RUN npm install

# Build the React app using Vite
RUN npm run build

# Step 2: Set up the production environment
FROM node:16-alpine AS production

# Set the working directory
WORKDIR /app

# Copy the server files
COPY --from=build /app /app

# Install serve to serve static files
RUN npm install -g serve

# Copy the build output to the web server's directory
RUN mkdir -p /app/client/build
COPY --from=build /app/client/dist /app/client/build

# Expose port 80 for the web server and port 9000 for the API server
EXPOSE 4000
EXPOSE 5000

# Start the server and serve the static files
CMD ["sh", "-c", "serve -s /app/client/build -l 4000 & node server.js"]