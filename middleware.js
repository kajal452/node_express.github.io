const User = require('./models/User.model');
module.exports.authenticate= (req,res,next) =>{
    if(!req.session.user)
         res.redirect('/');
    else
        next();
}

module.exports.verifyAdmins = (req,res,next) =>{
    if(req.session.user && req.session.user.isadmin)
        next();
    else
        res.redirect('/');
}
module.exports.guest = (req,res,next) =>{
    if(req.session.user)
         res.redirect('/');
    else
        next();
}

module.exports.authenticateApi= async (req,res,next) =>{
    if(req.get('token')!=''){
    let user = await User.findById(req.get('token'));
    if(user){
        req.token = user._id;
        next();
    }else{
        res.json({'msg':'invalida token'});
    }
    }else{
        res.json({'msg':'invalida token'});
    }
    
}
module.exports.jsonReq =  (req, res, next)=> {
    
    if(req.originalUrl==="/api/auth/products" || req.get('Content-Type') === "application/json"){
        next();
    }else{
        res.json({'msg':'only json, application/json type acceptable'});
    }
}
module.exports.notFound =  (req, res, next)=> {
    res.status(404).render('error/404')
}

module.exports.serverError = (err, req, res, next)=> {
    console.error(err.stack)
    res.status(500).render('error/500')
}