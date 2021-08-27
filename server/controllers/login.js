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
                res.json({status: user.username + ' logged in!'})
            } else {
                res.json({error: ' incorrect password, please try again'})
            }
        })
        .catch(() => {
            res.send('no such username, please register')
        })
}