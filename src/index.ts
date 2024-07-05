import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.send('hello and welcome to \'Arash Salamander Website\'');
})

app.listen(3000,()=>console.log('hello arash server is up'));