# Use the official Node.js 18 image as the base
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript code
RUN yarn build

# Expose port 8080 for the app to listen on
EXPOSE 8080

# Start the app
CMD [ "yarn", "start" ]