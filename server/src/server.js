require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const express = require("express")
const server = express()

const admin = require('./admin/router')
const User = require('./app/controllers/UserController')

server
  .use(express.json())
  .use(cors())
  
  // routes
  .use('/admin', admin)
  .get("/api/users", User.index)
  .get("/api/users/:id", User.getOne)
  .post("/api/users/insert", User.insert)

const run = async() => {
    const port = process.env.PORT || 5400;
    const mongo_url = 'mongodb+srv://admin:megahack5password@cluster0.dfpzp.mongodb.net/megahack5?retryWrites=true&w=majority';

    await mongoose.connect(mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    server.listen(port, () => console.log(`Server started at port ${port}`))
}

run();
