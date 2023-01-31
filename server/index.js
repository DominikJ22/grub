const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const authController = require('./controllers/authController')
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
const app = express()


//connet DB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () => console.log('DB is successfully connected'))

//routes and middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', authController)
app.use('/product', productController)
app.use('/upload', uploadController)




//start server
app.listen(process.env.PORT, () => console.log(`Server started`))
// server is on port 5000, client is on port 3000,
// we are going to get a cors ERROR!!, but cors() removes that's error