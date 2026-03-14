import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    }

    res.status(400).json({
        errors: errors.array()
    })
}

export const registerValidator =
    [
        body("username").isString().withMessage("username should be string"),
        body("email").isEmail().withMessage("email should be a valid email address"),
        body("password").isLength({ min: 6, max: 12 }).withMessage("password should be between 6 and 12 charhcters long"),
        validate
    ]
