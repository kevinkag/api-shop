import mongoose from "mongoose";
import bcrypt from 'bcrypt-nodejs'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String, unique: true, lowercase: true },
    avatar: String,
    rol: String,
    password: { type: String, select: false },
    signUpDate: { type: Date, default: Date.now() },
    lastLogin: Date
})

UserSchema.pre('save', function (next) {
    let user = this
    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next()

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err)

            user.password = hash
            next()
        })
    })
})

UserSchema.methods.gravatar = function () {
    if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

export default mongoose.model('User', UserSchema)