const mongoose=require("mongoose")

const mondbUrl="mongodb+srv://abhisheksangawade:b8OldH3SHEq2FCFy@cluster0.l5yvtvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}