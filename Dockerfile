# Node image
FROM node:20-alpine

# სამუშაო დირექტორია
WORKDIR /app

# package.json კოპირება
COPY package*.json ./

# dependencies install
RUN npm install

# დანარჩენი კოდის კოპირება
COPY . .

# build
RUN npm run build

# port
EXPOSE 3000

# run app
CMD ["node", "dist/main"]