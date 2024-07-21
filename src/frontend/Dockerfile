FROM node:20-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY .en[v] .env

CMD ls

# say NO to unwanted telementry data collection 👍
ENV NEXT_TELEMETRY_DISABLED 1

FROM base as dev
CMD npm run dev

FROM base AS prod
CMD npm run start