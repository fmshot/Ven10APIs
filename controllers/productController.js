var Product = require('../models/product');
var ObjectId = require('mongoose').Types.ObjectId;


// Display list of all Books.
exports.products_list = ('/',
    (req, res) => {
        var editedProduct = {
            __v: false,
            Description: false,
            Category: false,
            Image: false,
            Color: false
        };
        Product.find({}, editedProduct, (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log(
                    "Error in Retriving Details :" + JSON.stringify(err, undefined, 2)
                );
            }
        });
    });

exports.newproduct_create = async (req, res, next) => {
    console.log("request recieved", req);
    let productt = await Product.findOne({
        Name: req.body.name
    });
    if (productt) {
        return res.status(400).send({
            message: "That book already exists! Please change book title"
        });
    }
    var product = new Product({
        Name: req.body.Name,
        Price: req.body.Price,
        Description: req.body.Description,
        Category: req.body.Category,
        Image: req.body.Image,
        Color: req.body.Color
    })
    product.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(400);
            res.json({
                error: err
            });
        }
    });
};


exports.product_unit = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send({
            message: `No record with the id : ${req.params.id}`
        });
    Product.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log(
                "Error in Retriving Required Book :" + JSON.stringify(err, undefined, 2)
            );
        }
    });
};