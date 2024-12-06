import React, { useState } from "react";
import { useCreateProductMutation } from "../redux/apis/services/productApi";
import { Navigate } from "react-router-dom";

const CreateProductPage = () => {
    const [product, setProduct] = useState({
        name: "",
        category: "",
        description: ""
    })

    const [createproduct, {isLoading, isError, error, isSuccess}] = useCreateProductMutation()

    const changeHander = (e) => {
        setProduct({...product, [e.target.id]: e.target.value})
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await createproduct(product)
        } catch (error) {
            console.error({message: "add product error"})
        }
    }

  return <center>
    <h3>Add new product</h3>
    {isSuccess && <Navigate to={"/"}/>}
    {isError && <small>{error.data.message}</small>}
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="name" id="name" value={product.name} onChange={changeHander}/><br />
        <input type="text" placeholder="category" id="category" value={product.category} onChange={changeHander}/><br />
        <input type="text" placeholder="description" id="description" value={product.description} onChange={changeHander}/><br />
        <button type="submit" disabled={isLoading}>{isLoading? "Adding product...": "Add product"}</button>
    </form>
  </center>
};

export default CreateProductPage;
