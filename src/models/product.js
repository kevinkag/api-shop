import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: String,
    picture: String,
    price: Number,
    category: { type: String, enum: ['computers', 'phones', 'accesories'] },
    description: String
})

export default mongoose.model('Product', ProductSchema)


