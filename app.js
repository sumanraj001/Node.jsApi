const express=require("express")
const app=express()

// app.get('/',(req,res)=>{
//     res.send("Hi, I am Live")
// });

const a =require('./routes/products')

const port=process.env.PORT || 5000
app.use('/api',a);


const start=async ()=>{
    try{
        app.listen(port,()=>{ 
            console.log(`${port}, I am connected`) 
            
        })
        

    }catch(e){
        console.log(e)
    }

}
start();
