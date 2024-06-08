const mongoose = require ('mongoose')
const userData = new mongoose.Schema({
    
    userName: {
        type: String,
      },
      EmailID: {
        type: String,
      },
      Password: {
        type: String,
      },
      MobileNumber: {
        type: Number,
      }
})

const userDB = mongoose.model("tablename",userData)
module.exports= userDB;