const mongoose = require('mongoose')
const Local_url = 'mongodb://127.0.0.1:27017/admissionPortalmain'

const connectdb = ()=>{
    return mongoose.connect(Local_url)
    .then(()=>{
        console.log('connect db')
    }).catch((error)=>{
        console.log(error)
    })

}

module.exports = connectdb