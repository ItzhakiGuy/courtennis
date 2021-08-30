import User from "../models/user.js";

export const users = (req, res) => {
    User.find({})
        .then(async users => {
                res.json({status: '200', success: true, usersList: users.map(user => user.username)})
        })
        .catch(() => {
            res.json({success: false, error: "couldn't get users, please try again"})
        })
}