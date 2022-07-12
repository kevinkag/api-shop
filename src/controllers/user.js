import mongoose from "mongoose";
import User from '../models/user'
import service from "../services";

function signUp(req, res) {
    const user = new User({
        username: req.body.username,
        avatar: req.body.avatar,
        rol: 'user',
        password: req.body.password,
    })

    user.save((err) => {
        if (err) res.status(500).send({ message: `Error al crear usuario: ${err}` })

        return res.status(200).send({ token: service.createToken(user) })
    })
}

function signIn(req, res) {
    User.find({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'No existe el usuario' })

        req.user = user
        res.status(200).send({
            message: 'Te has logeado correctamente',
            token: service.createToken(user)
        })
    })
}

export default {
    signUp,
    signIn
}