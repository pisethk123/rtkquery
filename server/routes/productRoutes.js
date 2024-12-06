import express from "express";
import { createProduct, deleteProduct, getProducts } from "../controllers/productControllers.js";

const router = express.Router()

router.post("/createproduct", createProduct)
router.get("/getproducts", getProducts)
router.delete("/deleteproduct/:id", deleteProduct)

export default router