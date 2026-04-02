# Node image
FROM node:20-alpine

# Create app directory
WORKDIR /src/app

# Copy package.json first (for caching)
COPY package*.json ./

# dependencies install
RUN npm install

# Copy rest of the app (optional, dev volume mount-ით უკვე sync ხდება)
COPY . .

# port
EXPOSE 3000

# run app
CMD ["npm", "run", "start:dev"]