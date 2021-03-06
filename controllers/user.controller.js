const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const Product = require('../models/Product.model');
const Cart = require('../models/Cart.model');
const Mailer = require('../mail');
module.exports.getSignup = (req, res) => {
    res.render('pages/auth/signup');
}

module.exports.getLogin = (req, res) => {
    res.render('pages/auth/login');
}
module.exports.postSignup = async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10);
    let result = await User.create({ ...req.body, password: hash });
    let mailsend = await Mailer(req.body.email);
    res.redirect('/');
}
module.exports.postLogin = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
        const match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
            req.session.user = user;
            res.redirect('/signup');
        }
        else {
            res.redirect('/');
        }

    } else {
        res.redirect('/');
    }
}
module.exports.home = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('pages/index', { products: products });
    } catch (err) {
        res.status(500);
    }
}
module.exports.getLogout = (req, res) => {
    req.session.destroy(err => {
        console.log(err);
    });
    res.redirect('/');
}