const express=require('express')
const app=express()
const port=8080
const mongoDB=require('./db');
const cors=require('cors');

mongoDB();

app.use(cors());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
    next();
})

app.get('/',(req,res)=>{
    res.send("Hello World!!");
})
app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));
app.listen(port,()=>{
    console.log(`App listening to port ${port}`);
})