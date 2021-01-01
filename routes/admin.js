const express = require('express');
const path = require('path');
const rootDirectory = require('../util/path');

const router = express.Router();
const products = [];
router.get('/add-product',(req, res, next) => {
    // res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
    res.render('add-product', {title:'Add product', buttonText:'Add',path:'/admin/add-product',pageTitle:'add product'});
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    console.log(products);
    res.redirect('/');
  });

exports.routes = router;
exports.products = products;