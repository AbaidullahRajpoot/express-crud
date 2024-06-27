import ProductModel from "../models/productModel.js"

// =================== Order Controller (Class-Based) ===================

class ProductController {

    static async index(req, res) {
        try {
            const productResult = ProductModel.insertMany([
                { "productName": "Product A", "productPrice": 10.00 },
                { "productName": "Product B", "productPrice": 20.00 },
                { "productName": "Product C", "productPrice": 15.00 }
            ]);
            res.send(productResult)
        } catch (error) {
            console.error(error);
        }
    }

}

export default ProductController; 
