const app =require('./app')
const connectDB = require('./db/index')
const dotenv =require('dotenv')
dotenv.config({
    path: './.env'
})
connectDB().then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`server is connected on ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("MongoDB connection failed",err);
})
