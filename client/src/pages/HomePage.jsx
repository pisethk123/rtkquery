import React from "react";
import { useDeleteProductMutation, useGetAllProductsQuery } from "../redux/apis/services/productApi";
import { Link } from "react-router-dom";

const HomePage = () => {
    const {data: products, isLoading: productLoading} = useGetAllProductsQuery()
    const [deleteProduct, {isLoading: deleteLoading}] = useDeleteProductMutation()

    const deleteHandler = async (productId) => {
        try {
            await deleteProduct(productId)
        } catch (error) {
            console.error({message: "error deleting the record"})
        }
    }

  return <center>
    <h3>Product List</h3>
    <Link to={"/createproduct"}>Create new product</Link>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Last Update</th>
            </tr>
        </thead>
            
        <tbody>
            {products?.length  === 0 && <tr><td colSpan={"5"}>There is no product right now</td></tr>}
            {productLoading && <tr><td colSpan={"5"}>Loading...</td></tr>}
            {
                products?.map((product) => <tr  key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                    <td>{product.updatedAt}</td>
                    <td>
                        <button onClick={() => deleteHandler(product._id)} disabled={deleteLoading}>{deleteLoading? "Deleting...": "Delete"}</button>
                    </td>
                </tr>)
            }
        </tbody>
    </table>
  </center>
};

export default HomePage;
