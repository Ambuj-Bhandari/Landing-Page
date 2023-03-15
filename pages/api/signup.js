import data from "../../models/User";
import cntdb from "../../middleware/mongoose";

var Crypto=require("crypto-js");
const handler=async(req,res)=>{
    if(req.method==='POST'){
        console.log(req.body);
        const {Name,Email}=req.body;
        let u=new data({Name,Email,pass:Crypto.AES.encrypt(req.body.pass,"secret123").toString()});
        await u.save();
        res.status(200).json({success:"sucess"});
    } 
    else{
        res.status(400).json({error:"This method is not allowed"});
    }
}
export default cntdb(handler);