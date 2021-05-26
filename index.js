require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const db = require('./db');
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/admin/category');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', userRouter);
app.use('/category', categoryRouter);
app.use(function (req, res, next) {
    res.status(404).render('error/404')
});
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).render('error/500')
})
app.listen(PORT, function () {
    console.log('server started succefully');
});

function authenticate(options){
    return (req,res,next)=>{
        if(options.auth){
            
        }
    }
}