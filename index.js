const express = require('express');
const bodyparser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const app = express();

app.set('views','views');
app.set('view engine', 'pug');
app.use(bodyparser.urlencoded({extended:false}));
app.use('/admin',adminData.routes);
app.use('/',shopRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));
    res.status(404).render('404',{text:"Page not found!!",pageTitle:'page not found'})
});

app.listen(3000, () =>{
    console.log("listening port 3000");
});