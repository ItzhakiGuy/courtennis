import mongoose from 'mongoose'
import passportLocalMongoose from "passport-local-mongoose";

let userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
export default User;