require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
var MemoryStore = require('memorystore')(session)
const db = require('./db');

// routes
const userRouter = require('./routes/user');
const cartRouter = require('./routes/cart');
const categoryRouter = require('./routes/admin/category');
const subCategoryRouter = require('./routes/admin/subcategory');
const productRouter = require('./routes/admin/product');
// 
const apiUserRouter = require('./routes/api/user');
const apiProductRouter = require('./routes/api/product');

const middlewares = require('./middleware'); //middleware
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(session({ secret: 'keyboard cat',cookie: { maxAge: 86400000 },store: new MemoryStore({checkPeriod: 86400000}),resave:false}));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
  });
  
app.use('/admin',[middlewares.authenticate,middlewares.verifyAdmins]);
app.use('/api',middlewares.jsonReq);
app.use('/api/auth',middlewares.authenticateApi);

//routes
app.use('/', userRouter);
app.use('/cart', cartRouter);
app.use('/admin/category', categoryRouter);
app.use('/admin/subcategory', subCategoryRouter);
app.use('/admin/product', productRouter);

// api
app.use('/api',apiUserRouter);
app.use('/api/auth/products',apiProductRouter);

app.use(middlewares.notFound);
app.use(middlewares.serverError);

app.listen(PORT, function () {
    console.log(`server running on http://localhost:${PORT}`);
});
