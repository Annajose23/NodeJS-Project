const express = require('express');
const path = require('path');
const rootDirectory = require('../util/path');
const router = express.Router();
const adminData = require('./admin');

router.get('/',(req, res, next) => {
    console.log("shop.js", adminData.products);
    const products = adminData.products;
    res.render('shop.pug',{prods:products, path:'/',pageTitle:'shop'});
});

module.exports = router;