import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/user.js";

passport.use(new Strategy({
    usernameField:'email',
    passReqToCallback:true
},function(req,email, password, done){
    
        User.findOne({email:email},function(err,user){
              if(err){
                console.log("error in authenticating user local strategy",err);
                return done(err);
              }
              if(!user || user.password != password) { 
                req.flash("error","Incorrect Username/Password");       
                return done(null,false);
              }
              req.flash("success","Login Successfully");
            return done(null,user);
        })
}));

passport.serializeUser(function(user,done){
    done(null,user.id);
})


passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        return done(null,user);
    })
});


passport.checkAuthentication = function(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/user/login');
}

//set the user for the views
passport.setAuthenticatedUser = function(req,res,next) 
{
    if(req.isAuthenticated())
    {
        res.locals.user = req.user;
    }
    next();
}





export default passport;
