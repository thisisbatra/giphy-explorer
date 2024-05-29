const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const trendingRequest=require('./trendingRequest');
const searchRequest=require('./searchRequest');

const app=express();
const port=3001;
const corsOptions={
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/trendingRequest',async(req,res)=>{
    try{
        let resource=req.body.value;
        let response= await trendingRequest(resource);
        // console.log("data from body",resource);
        res.send(response.data);
    }
    catch(err){
        console.log(err);
    }
})

app.post('/searchRequest',async(req,res)=>{
    try{
        let resource=req.body.value;
        let search=req.body.search
        let response=await searchRequest(resource,search);
        // console.log("data from body",search);
        // console.log(response.data)
        res.send(response.data);
    }catch(err){
        console.log(err)
    }
})

app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
})