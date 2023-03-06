import User from "../models/user.js"

export function signUp(req,res)
{
    return res.render("signup",{title:"Create Account"});
}

export function signIn(req,res)
{
    return res.render("login",{title:"Login Page"});
}

export async function createAccount(req,res) 
{
    try{
    console.log(req.body);
    const exist = await User.findOne({email:req.body.email});
    if(!exist) 
    {
        await User.create(req.body);
        return res.redirect(signIn);
    }
    return res.status(409).json({
        success:"User Already exist.."
    });
   }
   catch(err){
    console.log(err)
    return res.status(500).json({
        error:"Server Error...."
    });
   }
}

export  function loginUser(req,res) 
{
  return res.redirect("/");
}