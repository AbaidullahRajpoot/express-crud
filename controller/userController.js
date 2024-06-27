import userModel from "../models/userModel.js";

// ===================User Controller===================

const index = async (req, res) => {
  try {
    const users = await userModel.find();
    res.render('signup', { users })
  } catch (error) {
    console.log(error)
  }
}

const addUser = async (req, res) => {
  try {
    const { name, email, address, phone } = req.body;
    const doc = new userModel({
      userName: name,
      userEmail: email,
      userAddress: address,
      userPhone: phone
    })
    const rs = await doc.save();
    res.redirect('/');
  } catch (error) {
    console.log(error)
  }
}

const editUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.render('edit', { user })
  } catch (error) {
    console.log(error)
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.body.id;
    console.log(userId)
    const { name, email, address, phone } = req.body;
    const updateRecord = new userModel({
      _id: userId,
      userName: name,
      userEmail: email,
      userAddress: address,
      userPhone: phone
    })

    const updatedUser = await userModel.findByIdAndUpdate(userId, updateRecord);
    res.redirect('/');
  } catch (error) {
    console.log(error)
  }
}

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.log(error)
  }
}

export { index, addUser, editUser, updateUser, deleteUser }