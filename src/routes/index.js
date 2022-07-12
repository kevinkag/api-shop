import express from 'express'
import ProductController from '../controllers/product'
import UserController from '../controllers/user'
import auth from '../middlewares/auth'
const api = express.Router()

api.get('/product', ProductController.getProducts)
api.get('/product/:productId', ProductController.getProduct)
api.post('/product', ProductController.saveProduct)
api.put('/product/:productId', ProductController.updateProduct)
api.delete('/product/:productId', ProductController.deleteProduct)

api.post('/signup', UserController.signUp)
api.post('/signin', UserController.signIn)

api.get('/private', auth.isAuth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' })
})

export default api
