import express from 'express';

import mongoose from 'mongoose';
import dotenv from 'dotenv';

import path from 'path';


dotenv.config({ path:'./../.env' });

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to ");
}).catch(err =>{
    console.log(err.message);
});

const app = express();

app.get('/',(req,res) =>{
    res.send('Server is ready');
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

