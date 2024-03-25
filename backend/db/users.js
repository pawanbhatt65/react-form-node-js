const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
    },
    phone: {
        type: String,
        required: [true, 'Please enter your number!']
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"]
    },
    subject: {
        type: String,
        required: [true, "Please enter your subject!"]
    }
})

module.exports=mongoose.model("users", userSchema)