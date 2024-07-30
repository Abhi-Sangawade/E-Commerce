const Rating = require("../models/review.js");
const productService= require("../services/product.service.js");

async function createReview(req,user){
    const product = await productService.findProductById(req.productId);

    const review=new Review({
        product:product._id,
        user:user._id,
        review:reqData,review,
        createdAt:new Date()
    })

    await product.save();
    return await review.save();
}

async function getAllReview(productId){
    return await Rating.find({product:productId});
}

module.exports={
    createReview,
    getAllReview,
}
