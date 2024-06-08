const userModel = require('../Model/model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegPost = async (req, res) => {
    try {
        const { name, email, password, MobileNumber } = req.body;
        const userExist = await userModel.findOne({ email });

        if (userExist) {
            return res.status(409).json({ message: "User already exists", success: false });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            name,
            email,
            password: hashPassword,
            MobileNumber,
        });

        await newUser.save();
        return res.status(201).json({
            data: newUser,
            message: "User created successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error in user registration:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

const login = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "User doesn't exist", success: false });
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Password doesn't match", success: false });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30m",
        });

        return res.status(200).json({
            message: "Login successful",
            success: true,
            data: token,
        });
    } catch (error) {
        console.error("Error in user login:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

module.exports = {
    userRegPost,
    login
};
