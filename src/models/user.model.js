import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'UserName is required'],
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()

})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)

}

userSchema.methods.genrateAccessToken = function(){
    jwt.sign({
         _id: this._id,
         username : this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }

)

}
userSchema.methods.genrateRefreshToken = function(){
    jwt.sign({
        _id: this._id,

   },
   process.env.REFRESH_TOKEN_SECRET,
   {
       expiresIn: process.env.REFRESH_TOKEN_EXPIRY
   }

)
}


export const User = mongoose.model("User", userSchema)