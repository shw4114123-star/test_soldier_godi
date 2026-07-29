FROM 

WORKDIR app/

copy package* json

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm" "start" ]