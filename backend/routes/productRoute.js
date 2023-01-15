const express=require("express");
const router=express.Router();
const {createProduct, getAllProducts} =require("../controllers/productController");
router.route("/product/create").post(createProduct);
router.route("/products").get(getAllProducts);

module.exports=router;