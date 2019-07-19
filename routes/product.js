var express = require('express');
var router = express.Router();


// Require controller modules.
var product_controller = require('../controllers/productController');




// GET request for list of all Product items.
router.get('/products', product_controller.products_list);



// POST request for creating a new Product item.

router.post('/createNew', product_controller.newproduct_create);



// GET request for one Product.
router.get('/product/:id', product_controller.product_unit);

module.exports = router;