import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import { sendEmail } from "../services/mail.service.js";

export async function register(req, res) {

    console.log("BODY:", req.body);

    const { username, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: 'User with this email or username already exists',
            success: false,
            err: "User Already Exists"
        });
    }

    const user = await userModel.create({
        username,
        email,
        password
    });

    await sendEmail({
        to: user.email,
        subject: 'Welcome to Perplexity!',
        html: `
                <h1>Hi ${user.username},</h1>
                <p>Thank you for registering at Perplexity. We're excited to have you on board!</p>
                <p>Best regards,<br/>The Perplexity Team</p>
            `,
    });

    res.status(201).json({
        message: 'User registered successfully',
        success: true,
        data: {
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                verified: user.verified,
                createdAt: user.createdAt
            },
        }
    });
}