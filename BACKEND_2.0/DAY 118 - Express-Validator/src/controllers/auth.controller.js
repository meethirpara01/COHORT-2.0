export async function registerUser (req, res, next) {
    // try {
    //     throw new Error("User already exist with this email");
    // } catch (error) {
    //     error.status = 409
    //     next(error);
    // }

    res.status(200).json({
        message: "User register successfully"
    });
}