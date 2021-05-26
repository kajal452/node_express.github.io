require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const db = require('./db');

// routes
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/admin/category');
const subCategoryRouter = require('./routes/admin/subcategory');
const productRouter = require('./routes/admin/product');
const middlewares = require('./middleware'); //middleware
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
  });
app.use('/', userRouter);
app.use('/admin',[middlewares.authenticate,middlewares.verifyAdmins]);
app.use('/admin/category', categoryRouter);
app.use('/admin/subcategory', subCategoryRouter);
app.use('/admin/product', productRouter);


app.use(middlewares.notFound);
app.use(middlewares.serverError);

app.listen(PORT, function () {
    console.log(`server running on http://localhost:${PORT}`);
});
