import express from 'express';
import   Mongoose from 'mongoose';
import Cors from 'cors';
import Videos from './dbModel.js';
const app = express()
const port = process.env.PORT || 9000

const url="mongodb+srv://admin:12345@cluster0.uqtmj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

Mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("Connected to MongoDB!!!");
    }
  );

//Middleware
app.use(express.json())
app.use(Cors())
//DB Config
//API EndPoint

app.get("/",(req,res)=>res.status(200)
.send("Hello from express"))

app.post('/v2/posts',(req,res)=>{
    const dbVideos= req.body
    Videos.create(dbVideos,(err,data)=>{
        if(err)
        res.status(500).send(err)
        else{
        res.status(201).send(data)
        }
    })
})

app.get('/v2/posts',(req,res)=>{
    Videos.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)

        }
    })
})

app.listen(port,()=>console.log(`Listening at localhost:${9000}`));