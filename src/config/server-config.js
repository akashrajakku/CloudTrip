const dotenv= require('dotenv');

dotenv.config(); // it initializes global  "process", letting us access env via process.env

module.exports={
    PORT: process.env.PORT
}