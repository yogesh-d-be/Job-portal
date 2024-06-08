const mongoose = require('mongoose')
const Url = "mongodb+srv://anithas12042003:Anitha1204@cluster0.tdutujd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connect=()=>{
    mongoose.connect(Url)

    .then(()=>{
        console.log("mongoose connect......");
    })
    .catch((error)=>{
        console.log("mongoose connect:",error.message);
    })
}

module.exports = connect;