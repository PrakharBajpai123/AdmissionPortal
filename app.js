const express = require ('express')
const app = express()
const Port = 4000;
const web = require('./routes/web');
const connectdb = require('./db/connectdb');



//templating engine
app.set('view engine', 'ejs')
//css file and images
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))


//connect db
connectdb()


app.use('/',web)








app.listen(Port,()=>{
    console.log(`server is started at Port ${Port}`)
})