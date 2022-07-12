export default {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    SECRET_TOKEN: process.env.TOKEN || 'mysecrettoken'
}