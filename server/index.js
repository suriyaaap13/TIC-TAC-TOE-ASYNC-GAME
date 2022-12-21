import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import cors from 'cors';



const app = express();

app.use(cors());
// helps to recieve data in the form of json from the front end
app.use(express.json());

app.

app.listen(3001, (err)=>{
    if(err){
        console.log("Error in running the port ", err);
    }
    console.log("Server running in port 3001");
});