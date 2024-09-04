const User=require('../models/userSchema')

exports.signup= async(req, res)=>{
    const {email,password,name}=req.body
     console.log(req.body)
 
    //  const otp=Math.floor((Math.random()*10000));
     // console.log(otp);
     
    //  const expireotp=Date.now()+(10 *(60 *1000));
     // console.log(expireotp);
     
 
    //  const salt= bcrypt.genSaltSync(10);
    //  const hash=bcrypt.hashSync(password, salt);
    
     
     if(!(name && email && password)){
         return res.status(400).json({message:"all feild are required"})
 
     }
     
     const existingUser= await User.findOne({email});
     if(existingUser){
         return res.status(400).json({message:"user already exists"})
     }
     const data = {email , name, password}
     console.log(data);
     
     const user= new User(data)
     await user.save();
     res.status(201).json(user)
 
 }