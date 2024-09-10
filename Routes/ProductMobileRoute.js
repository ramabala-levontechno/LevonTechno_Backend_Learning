
const express = require("express");
const mobileproductDetails = require("../Controllers/ProductMobileController")

const router = express.Router();

router.post("/upload-mobile-details", mobileproductDetails.productMobileDetailsUploading)
router.get("/getAll-MobileProducts",mobileproductDetails.getAllMobileProductDetails)
router.get("/getSingleProductById-MobileProducts/:id",mobileproductDetails. getSingleProductById)
router.put("/update-MobileProductDetails/:id", mobileproductDetails.updateProductById)
router.delete("/:id",mobileproductDetails.deleteProductById)

module.exports = router;

