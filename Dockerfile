# Gebruik een officiële Node.js image als basis
FROM node:18-alpine

# Stel de werkdirectory in
WORKDIR /app

# Kopieer package.json en package-lock.json voor snellere builds
COPY package.json package-lock.json ./

# Installeer afhankelijkheden
RUN npm install

# Kopieer de rest van de app
COPY . .

# Build de Next.js app
RUN npm run build

# Expose de poort waarop Next.js draait
EXPOSE 3000

# Start de Next.js server
CMD ["npm", "run", "start"]
