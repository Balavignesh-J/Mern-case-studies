import express,{type Request,type Response,type Application} from 'express';

const app: Application = express();
const port : number = 3000;

app.get('/contact',(req:Request,res:Response)=>{
    let details={
        email:'abc@gmail.com',
        phone:9874563210
    }
    res.json(details)
})

app.listen(port)