require('dotenv').config();
module.export = 
{
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.env.DB_HOST,
    "dialect": "postgres"
  },
  
}