import UserModel from "../models/userModel.js"; // Assuming userModel is a class

// =================== User Controller (Class-Based) ===================

class UserController {

  static async index(req, res) {
    try {
      const users = await UserModel.find();
      res.render('signup', { users });
    } catch (error) {
      console.error(error);
    }
  }

  static async addUser(req, res) {
    try {
      const { name, email, address, phone } = req.body;
      const newUser = new UserModel({
        userName: name,
        userEmail: email,
        userAddress: address,
        userPhone: phone,
      });
      const savedUser = await newUser.save();
      res.redirect('/');
    } catch (error) {
      console.error(error);
    }
  }

  static async editUser(req, res) {
    try {
      const user = await UserModel.findById(req.params.id);
      res.render('edit', { user });
    } catch (error) {
      console.error(error);
    }
  }

  static async updateUser(req, res) {
    try {
      const userId = req.body.id;
      const { name, email, address, phone } = req.body;
      const updatedUser = await UserModel.findByIdAndUpdate(userId, {
        userName: name,
        userEmail: email,
        userAddress: address,
        userPhone: phone,
      });

      if (!updatedUser) {
        console.error(`User with ID ${userId} not found for update`);
      }

      res.redirect('/');
    } catch (error) {
      console.error(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
      res.redirect('/');
    } catch (error) {
      console.error(error);
    }
  }
}

export default  UserController; 
