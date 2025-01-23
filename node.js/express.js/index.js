const express= require('express')
const app=express.Router();
const PORT=3000
app.use(express.json());

//route
app.get('/',(req,res)=>res.send('hello word'));

app.listen(PORT,()=>console.log('server is running')
)