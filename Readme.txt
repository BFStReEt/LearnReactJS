Back-end

npm install --save sequelize@6.6.2
PS D:\ReactJS\Back-end> node_modules/.bin/sequelize init
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npm install --save mysql2@2.2.5

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

Front-end

