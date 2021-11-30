import  Mongoose  from "mongoose";

const sortVideoSchema=Mongoose.Schema({
    url:String,
    channel:String,
    description:String,
    song:String,
    likes:String,
    shares:String,
    message:String,

});

export default Mongoose.model('sortVideo',sortVideoSchema)