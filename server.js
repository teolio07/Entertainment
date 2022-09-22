//dependencies
const express = require('express');
const cors = require('cors')
require('dotenv').config()
//database
require('./database/db')


//variables
const app = express();

const routerApi = require('./routes');

//enviroment variables
const port = process.env.PORT || 3003;

//settings
app.use(express.static("public"));
app.use(express.json());


//cors
//cors
const whitelist = ['http://localhost:3000','http://localhost:3003']
const options = {
    origin: (origin, callback)=>{
        if(whitelist.includes(origin) !== -1){ 
            callback(null, true); 
        }else{ 
            callback(new Error('no permitido'))
        }
    }
}
app.use(cors(options))

//routes
routerApi(app);

//run server

app.listen(port,(error)=>{
    if(error){
        console.log(`algo salio mal ${error}`)
    }
    console.log(`running server in port: ${port}`)

})