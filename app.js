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

# Additional Implementation 1760494591

# Code Update 1760494591-24547

# Additional Implementation 1760494591

# Code Update 1760494591-4819

# Additional Implementation 1760494591

# Additional Implementation 1760494591

# Additional Implementation 1760494591

# Additional Implementation 1760494592

# Additional Implementation 1760494592

# Additional Implementation 1760494592

# Code Update 1760494592-32747

# Additional Implementation 1760494592

# Code Update 1760494592-30989

# Additional Implementation 1760494592

# Additional Implementation 1760494592

# Code Update 1760494593-31249

# Additional Implementation 1760494593

# Additional Implementation 1760494593

# Additional Implementation 1760494593

# Additional Implementation 1760494593

# Code Update 1760494593-17343

# Code Update 1760494593-26659

# Additional Implementation 1760494593

# Code Update 1760494593-29567

# Code Update 1760494593-32597

# Additional Implementation 1760494593

# Code Update 1760494593-23943

# Additional Implementation 1760494594

# Code Update 1760494594-17880

# Additional Implementation 1760494594

# Additional Implementation 1760494594

# Code Update 1760494594-25337

# Code Update 1760494594-21556

# Code Update 1760494594-15210

# Additional Implementation 1760494595

# Code Update 1760494595-7537

# Additional Implementation 1760494595

# Additional Implementation 1760494595

# Code Update 1760494595-24773

# Additional Implementation 1760494595

# Additional Implementation 1760494595

# Code Update 1760494595-2280

# Additional Implementation 1760494595

# Code Update 1760494595-22780

# Additional Implementation 1760494595

# Additional Implementation 1760494596
