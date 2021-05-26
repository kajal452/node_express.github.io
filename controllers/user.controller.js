const bcrypt = require('bcrypt');
const User = require('../models/User.model');

module.exports.getSignup = (req, res) => {
    res.render('pages/auth/signup');
}

module.exports.getLogin = (req, res) => {
    res.render('pages/auth/login');
}
module.exports.postSignup = async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10);
    let result = await User.create({ ...req.body, password: hash });
    res.json(result);
}
module.exports.postLogin = async (req, res) => {
    const user=  await User.findOne({email:req.body.email});
    const match= await bcrypt.compare(req.body.password, user.password);
   if(user && match){
    res.redirect('/signup');
   }else{
       res.redirect('/');
   }
}
module.exports.home = async (req, res) => {
    try {
        const users = await User.find();
        res.render('pages/index', { users: users });
      } catch (err) {
        res.status(500);
      }

    
   
}