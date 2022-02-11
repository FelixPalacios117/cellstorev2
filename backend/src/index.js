const { databaseSetUp } = require('./database')
const {setup}=require('./server')
require('dotenv').config()
async function Iniciar(){
    setup()
    databaseSetUp()
}
Iniciar()