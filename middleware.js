const User = require('./models/User.model');
module.exports.authenticate= (req,res,next) =>{
    console.log('authenticate middleware'+req.url);
    if(!req.session.user)
         res.redirect('/');
    else
        next();
}

module.exports.verifyAdmins = (req,res,next) =>{
    console.log('verify admin middleware called');
    if(req.session.user && req.session.user.isadmin)
        next();
    else
        res.redirect('/');
}
module.exports.guest = (req,res,next) =>{
    console.log('verify guest called');
    if(req.session.user)
         res.redirect('/');
    else
        next();
}

module.exports.authenticateApi= async (req,res,next) =>{
    console.log('api middleware');
    if(req.get('token')!=''){
    let user = await User.findOne({'token':req.get('token')});
    if(user)
        next();
    }
    return res.json({'msg':'invalida token'});
}
module.exports.jsonReq =  (req, res, next)=> {
    if(!req.is(['json','application/json']))
    return res.json({'msg':'only json, application/json type acceptable'});
    next();
}
module.exports.notFound =  (req, res, next)=> {
    res.status(404).render('error/404')
}

module.exports.serverError = (err, req, res, next)=> {
    console.error(err.stack)
    res.status(500).render('error/500')
}