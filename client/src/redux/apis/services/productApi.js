import { apiSlice } from "../apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // create new product
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/createproduct",
                method: "POST",
                body: newProduct
            }),
            invalidatesTags: ["products"]
        }),
        // get all products
        getAllProducts: builder.query({
            query: () => ("/getproducts"),
            providesTags: ["products"]
        }),
        // delete a product
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: "/deleteproduct/" + productId,
                method: "DELETE"
            }),
            invalidatesTags: ["products"]
        })
    })
})

export const {
    useCreateProductMutation,
    useGetAllProductsQuery,
    useDeleteProductMutation
} = productApi