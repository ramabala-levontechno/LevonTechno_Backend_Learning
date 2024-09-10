
const mongoose = require("mongoose");

// Creating a Product Schema for Mobile
const productMobileSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    size:{
        type:"String",
        required:true
    },
    color:{
        type:"String",
        required:true
    },
    brand:{
        type:"String",
        required:true
    },
    OS:{
        type:"String",
        required:true
    },
    MS:{
        type:"String",
        required:true
    },
    Resolution:{
        type:"String",
        required:true
    },
    screenSize:{
        type:"String",
        required:true
    }
});

const ProductMobileDetails = mongoose.model("ProductMobileDetails",productMobileSchema)

module.exports = ProductMobileDetails;