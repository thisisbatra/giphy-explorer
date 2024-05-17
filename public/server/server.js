const express=require('express');
const trendingRequest=require('./trendingRequest');
const cors=require('cors');

const app=express();
const port=3001;

app.use(express.json());
app.use(cors());

app.post('/trendingRequest',async(req,res)=>{
    try{
        let response= await trendingRequest();
        // console.log(response)
        res.send(response.data);
    }
    catch(err){
        console.log(err);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
})