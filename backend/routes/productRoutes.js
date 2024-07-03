import express from "express";
const router = express.Router();
//import products from '../data/products.js';
//import asyncHandler from "../middleware/asyncHandler.js";
//import Product from "../models/productModel.js"
import { getProducts,getProductById } from "../controllers/productController.js";
import { Error } from "mongoose";

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);


//router.get('/',asyncHandler(async(req,res)=>{
//    const products = await Product.find({}); // we want all of them so we are writing "({})"
//    res.json(products);
//})); // we removed /api/products because we are goinf to link it from the server.js

// router.get('/:id',asyncHandler(async(req,res)=>{
    // const product = await Product.findById(req.params.id);
    // if(product){
    //    return res.json(product);
    // }
    // else{
        //  res.status(404);
        //  throw new Error("Resource not there");
    // }
// }));


export default router;