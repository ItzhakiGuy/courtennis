import User from "../models/user.js";
import bcrypt from "bcrypt";

export const login = (req, res) => {
    const userRequest = req.body
    User.findOne({
        username: userRequest.username
    })
        .then(async user => {
            const validPassword = await bcrypt.compare(userRequest.password, user.password);
            if (validPassword) {
                res.json({status: '200', success: true, message: `${user.username} is logged in!!`})
            } else {
                res.json({success: false, error: ' incorrect password, please try again'})
            }
        })
        .catch(() => {
            res.json({success: false, error: 'You need to be logged in to do that'})
        })
}