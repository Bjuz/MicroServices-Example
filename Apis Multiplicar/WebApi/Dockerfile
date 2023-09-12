# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /WebApi

# Copy the package.json and package-lock.json files from the "Apis" folder to the container
COPY Apis/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire "Apis" folder to the container
COPY Apis/ ./

# Command to start the application
EXPOSE 3000
CMD ["npm", "start"]
