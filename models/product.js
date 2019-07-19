var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Color: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);