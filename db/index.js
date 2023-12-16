const mongoose =require('mongoose')
const {DB_NAME} =require('../constants') 

const connectDB=async ()=>{
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`Database successfully connected on ${connectionInstance.connection.host}`);
    }catch(e){
        console.log("Database connection failed",e);
        process.exit(1);
    }
}
module.exports= connectDB