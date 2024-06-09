import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phoneNumber :{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    exam_progress : [
        {
            type : Schema.Types.ObjectId,
            ref : "ExamProgress"
        }
    ]
})

export const User = mongoose.model("User",userSchema)