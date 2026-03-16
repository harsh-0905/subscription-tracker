import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import {JWT_SECRET,JWT_EXPIRES_IN } from "../config/env.js"
export const signup = async (req, res, next) => {
    //Implement signup logic here
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        //Logic to create user and save to database
        const { name, email, password } = req.body;
        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const error = new Error('User already exists');
            error.status = 409;
            throw error;
        }
        //Hash password and create user
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create([{ name, email, password: hashedPassword }], { session });
        const  token = jwt.sign({ userId: newUser[0]._id },JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        await session.commitTransaction();
        session.endSession();
        res.status(201).json({ 
            success: true,
            message: 'User registered successfully',
            data:{
                user: newUser[0],
                token
            }
            
        })
    }
    catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }


};
export const signin = async (req, res, next) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            const error = new Error('Invalid email or password');
            error.status = 401;
            throw error;    
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            const error = new Error('Invalid email or password');
            error.status = 401;
            throw error;        
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        res.status(200).json({
            success: true,
            message: 'User signed in successfully',
            data: {
                user,
                token
            }
        });
    }
    catch (error) {
        next(error);
    }
};
export const signout = async (req, res, next) => {
    try{
        //Implement signout logic here
        res.status(201).json({
            success: true,
            message: 'User signed out successfully',
        });
    }
    catch (error) {
        next(error);
    }
};
