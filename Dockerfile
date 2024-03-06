# Stage 1: Build the React app
FROM node:alpine as build
WORKDIR /app/frontend

COPY package.json package-lock.json ./

RUN npm config set registry https://registry.npmjs.org/


RUN npm install 


COPY . .


RUN npm run build

# Stage 2: Serve the built React app using 

FROM nginx:alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
