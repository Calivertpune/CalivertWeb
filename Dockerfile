from node:21-alpine3.18 as calipharma

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN apk add yarn

# Install additional dependencies
RUN apk add --no-cache python3 make g++

# Configure Node-Sass to use LibSass
ENV SASS_BINARY_PATH=/usr/lib/node_modules/node-sass/vendor/linux-x64-83/binding.node

RUN yarn install

RUN ng build --project=calipharma --configuration=production

FROM nginx:1.25.3-alpine-slim

COPY --from=calipharma /app/dist/calipharma /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
