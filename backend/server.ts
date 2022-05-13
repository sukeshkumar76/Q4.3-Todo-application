import Express from 'express'
import cors from 'cors';
import Routes from "./Routes/Routes"
import db from "./Databases/dbConnection"

const app=Express();
app.use(Express.json());
app.use(cors());
app.use("/api",Routes);

//database connection
db.on('error',(error)=>console.error("db error"+error));
db.once('open', ()=>console.log("db connectd"));


const port= process.env.PORT||2000;

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
    
})