import User from "../models/user.js";
import bcrypt from 'bcrypt'

export const register = (req, res) => {
    const newUser = new User({username: req.body.username, password: req.body.password});
    User.findOne({
        username: req.body.username
    })
        .then(user => {
            if(!user){
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    newUser.password = hash
                    User.create(newUser)
                        .then(() => {
                            res.json({status: newUser.username + ' registered!'})
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({error: ' user already exists'})
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}