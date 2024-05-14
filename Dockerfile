# syntax=docker/dockerfile:1

FROM node:18-alpine

# Accept build argument for database connection string
ARG DATABASE_URL

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install prisma @prisma/client

# Initialize Prisma project and generate Prisma Client
RUN echo $DATABASE_URL > .env
RUN npx prisma init --provider postgresql --schema schema.prisma
RUN npx prisma generate

COPY . .

EXPOSE 3000
CMD npm run dev
