const userModel=require('../Model/model')
const bcrypt = require('bcrypt');

const userRegPost = async (req, res) => {
    try {
      const { name, email, password,MobileNumber } = req.body;
      const userExist = await userModel.findOne({ email });
      console.log(userExist);
      if (userExist) {
        return res.send({ message: "user already exist", success: false });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const newuser = new userModel({
        name,
        email,
        password: hashPassword,
        MobileNumber,
      });
      await newuser.save();
      return res.status(201).json({
        data: newuser,
        message: "User created successfully.",
        success: true,
      });
    } catch (error) {
      
      console.error("Error in user registration:", error);
  
      return res.status(500).json({
        message: "Internal server error.",
        success: false,
        error: error.message, 
      });
    }
  };
  
  const login = async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user doesn't exist", success: false });
      }
      const isPasswordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPasswordMatch) {
        return res
          .status(200)
          .send({ message: `Password doesn't match`, success: false });
      } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          
          expiresIn: "30min",
        });
        return res
          .status(200)
          .send({ message: "login successfull", success: true, data: token });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "Failed to login ", success: false, error });
    }
  };
module.exports = {
    userRegPost,
    login
}