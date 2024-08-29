# Use a node.js image
FROM node:18

# Set work directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the Vite used port
EXPOSE 5174

# Start the Vite server
CMD ["npm", "run", "dev"]
