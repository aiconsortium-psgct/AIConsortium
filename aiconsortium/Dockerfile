FROM node:22-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy all files including assets directory
COPY . .

EXPOSE 5731

# Build the application
RUN npm run build

CMD ["npm", "run", "preview"]
