const ProductMobileDetails = require("../Models/ProductMobileSchema");

const productMobileDetailsUploading = async(req,res)=>{

    const {name,size,color,brand,OS,MS,Resolution,screenSize} = req.body;
    try {
        if(!name || !size || !color || !brand || !OS || !MS || !Resolution || !screenSize){
            res.status(400).json({message:"Ensure to fill all the Details name,size,color,brand,OS,MS,Resolution,screenSize "})
        }
        
        const newProductMobileDetailsUploading = new ProductMobileDetails({
            name,size,color,brand,OS,MS,Resolution,screenSize
        })

        await newProductMobileDetailsUploading.save()
        res.status(200).json({message:"Mobile Product Details Uploaded Succesfully",newProductMobileDetailsUploading})
        console.log("Mobile Product Details Uploaded Succesfully",newProductMobileDetailsUploading)
    
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error While Uploading the Mobile Product Details.")
    }
}

const getAllMobileProductDetails = async(req,res)=>{
    try {
        const MobileProducts = await ProductMobileDetails.find()
        if(MobileProducts.length === 0) {
            res.status(401).json("No Mobile Products are available")
        }
        res.status(200).json({message:"Products Fetched Succesfully",MobileProducts})
    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server Error While Fetching the Data of all Mobile Product Details.")
    }
}

const getSingleProductById= async(req,res)=>{
    const productId = req.params.id
    try {
        const getMobileProductsById = await ProductMobileDetails.findById(productId)
        console.log(getMobileProductsById)
        if(!getMobileProductsById){
            res.status(404).json("No Products are available by this Id.")
        }
        res.status(200).json({message:"Products Fetching By Id is Succesful",getMobileProductsById})
    
    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server Error While Fetching the Data of all Mobile Product Details.") 
    }
}

const updateProductById = async(req,res)=>{
    const productId = req.params.id
    const {name,size,color,brand,OS,MS,Resolution,screenSize} = req.body;
    try {
        if (!name || !size || !color || !brand || !OS || !MS || !Resolution || !screenSize) {
            return res.status(400).json({ message: "Ensure to fill all the Details: name, size, color, brand, OS, MS, Resolution, screenSize" });
        }
        
        const updateMobileProductDetails = await ProductMobileDetails.findByIdAndUpdate(
            productId,
            {name,size,color,brand,OS,MS,Resolution,screenSize},
            {new:true}
        )
        
        if (!updateMobileProductDetails){
            res.status(404).json("Product is not available")
        }

        res.status(200).json({ message: "Mobile Product Details Updated Successfully", updateMobileProductDetails });
        console.log(updateMobileProductDetails)
    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server Error While Fetching the Data of a Single Mobile Product Details.") 
    }
}


const deleteProductById = async(req,res)=>{
    try {
        const productDeleteId = req.params.id
        const deleteProductByIds = await ProductMobileDetails.findByIdAndDelete(productDeleteId)
        if(!deleteProductByIds){
            res.status(404).json("Product is not available.")
        }
        res.status(200).json("Product Deleted Succesfully")
    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server Error While Deleting the Product.")
    }
}

module.exports = {productMobileDetailsUploading,getAllMobileProductDetails,getSingleProductById,updateProductById,deleteProductById}