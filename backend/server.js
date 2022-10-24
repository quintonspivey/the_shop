import express from 'express';
import seedRouter from './routes/seedRouter.js';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';
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



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

