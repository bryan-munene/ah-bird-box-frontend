FROM node:10 as react-build

ENV REACT_APP_API_URL="http://0.0.0.0:8000" \
    REACT_APP_API_KEY="AIzaSyBNe0bx4gYG6OaVIUHkDPy_ej0DidTl4lU" \
    REACT_APP_AUTH_DOMAIN="ah-bird-box.firebaseapp.com" \
    REACT_APP_IMGUR_CLIENT_ID="Client-ID e97f36417525559" \
    REACT_APP_IMGUR_URL="https://api.imgur.com/3/image"

WORKDIR /app
COPY package*.json /app/
RUN npm install --no-optional

COPY ./ /app/

CMD /bin/bash script.sh
