import OrderModel from "../models//orderModel.js"; // Assuming userModel is a class
import userModel from "../models/userModel.js";
// =================== Order Controller (Class-Based) ===================

class OrderController {

  static async index(req, res) {
    try {
      const orderResult = await OrderModel.insertMany([
        { "userId": "667d497341f86ceb0e48210f", "productId": "667d491841f86ceb0e482104", "quantity": 2 },
        { "userId": "667d497341f86ceb0e48210f", "productId": "667d491841f86ceb0e482105", "quantity": 3 },
        { "userId": "667d497341f86ceb0e48210f", "productId": "667d491841f86ceb0e482104", "quantity": 5 }
      ]);
      res.send(orderResult)
    } catch (error) {
      console.error(error);
    }
  }

  static async getOrderDataWithJoin(req, res) {
    try {
      const user = await userModel.findById("667d497341f86ceb0e48210f");
      console.log(user)
      const joinedData = await OrderModel.aggregate([
        {
          $match: {
            userId: user._id
          }
        },
        {
            $lookup: {
                from: "products",
                localField: "productId",
                foreignField: "_id",
                as: "productDetails"
            }
        },
        {
            $unwind: "$productDetails" // If productId is unique per order, otherwise use $unwind to deconstruct arrays with multiple matches
        },
        {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "userDetails"
            }
        },
        {
            $unwind: "$userDetails" // If userId is unique per order, otherwise use $unwind to deconstruct arrays with multiple matches
        }
    ]);
      res.json(joinedData); // Send the joined data as JSON
    } catch (error) {
      console.error(error);
      // Provide more specific error messages based on the error type
      res.status(500).send('Error fetching joined data. See server logs for details.');
    }
  }

}

export default OrderController; 
