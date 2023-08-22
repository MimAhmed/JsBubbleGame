# Nginx Official image
# FROM nginx:latest 

# Use this apline image to make the image size smaller (142 MB to 11MB)
FROM nginx:stable-alpine3.17-slim

WORKDIR .

# Copy all files of WORK Directory to inside container (Nginx Default Path)
COPY . /usr/share/nginx/html/
