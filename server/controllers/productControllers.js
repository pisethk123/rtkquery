import Product from "../models/productModel.js"

// create new product
export const createProduct = async (req, res) => {
    try {
        const {name, category, description} = req.body
        if(!name, !category) return res.status(400).json({message: "name and category is required!"})

        const newProduct = await new Product({name, category, description})
        newProduct.save()
        return res.status(201).json(newProduct)
    } catch (error) {
        console.log({message: "server is errorr"})
    }
}

// get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        return res.status(200).json(products)
    } catch (error) {
        console.log({message: "server is errorr"})
    }
}

// delete a product
export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params
        await Product.findByIdAndDelete(id)
        return res.status(200).json({message: "product is deleted"})
    } catch (error) {
        console.log({message: "server is errorr"})
    }
}