//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import  express  from "express";
import  { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
import  bodyParser from "body-parser";

const app=express();
const port=3000;
var kar=false;
app.use(bodyParser.urlencoded({extended:true}))
function right(req,res,next){
    
    const pass=req.body["password"]
    if(pass=="iloveyou"){kar=true;}
      next();
};
app.use(right);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})
app.post("/check",(req,res)=>{
    if(kar)res.sendFile(__dirname+"/public/secret.html");
    else res.sendFile(__dirname+"/public/index.html");
})
app.listen(port,(req,res)=>{
    console.log(`listening on  ${port}`);
})
