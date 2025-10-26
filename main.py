# main - Dockerfile for llm-mafia
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

CMD ["node", "index.js"]

# Additional Implementation 1760494591

# Additional Implementation 1760494591

# Code Update 1760494591-14684

# Additional Implementation 1760494591

# Code Update 1760494591-31537

# Additional Implementation 1760494591

# Additional Implementation 1760494591

# Additional Implementation 1760494591

# Additional Implementation 1760494591

# Code Update 1760494591-26013

# Code Update 1760494591-30841

# Code Update 1760494591-30540

# Additional Implementation 1760494592

# Code Update 1760494592-28567

# Code Update 1760494592-26237

# Additional Implementation 1760494592

# Code Update 1760494592-13228

# Additional Implementation 1760494592

# Additional Implementation 1760494592

# Additional Implementation 1760494592

# Additional Implementation 1760494592

# Additional Implementation 1760494592

# Code Update 1760494592-24085

# Code Update 1760494592-15497

# Additional Implementation 1760494593

# Additional Implementation 1760494593

# Additional Implementation 1760494593

# Code Update 1760494593-14458

# Additional Implementation 1760494593

# Additional Implementation 1760494593

# Code Update 1760494593-22236

# Code Update 1760494593-20232

# Additional Implementation 1760494593

# Code Update 1760494593-15251

# Additional Implementation 1760494594

# Code Update 1760494594-29658

# Additional Implementation 1760494594

# Additional Implementation 1760494594

# Code Update 1760494594-30203

# Code Update 1760494594-7368

# Additional Implementation 1760494594

# Code Update 1760494594-21783

# Code Update 1760494594-5156

# Code Update 1760494594-13799

# Additional Implementation 1760494595

# Additional Implementation 1760494595

# Additional Implementation 1760494595

# Additional Implementation 1760494595
