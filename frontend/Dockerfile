FROM node:25.5
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start"]
