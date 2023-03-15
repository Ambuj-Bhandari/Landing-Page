import data from "../../models/User";
import cntdb from "../../middleware/mongoose";
var Crypto=require("crypto-js");
const handler=async(req,res)=>{
    if(req.method==='POST'){
        console.log(req.body);
        let user= await data.findOne({Email:req.body.Email})
        const bytes=Crypto.AES.decrypt(user.pass,"secret123");
        var decryptpass=bytes.toString(Crypto.enc.Utf8);
        if(user){
        if(req.body.Email===user.Email &&req.body.pass=== decryptpass)
            res.status(200).json({success:true,Email:user.Email,Name:user.Name});
        else
            res.status(200).json({success:false,error:"Invalid Credentials"});
        }
        else
            res.status(200).json({success:false,error:"No User found"});
    } 
    else{
        res.status(400).json({error:"This method is not allowed"});
    }
}
export default cntdb(handler);