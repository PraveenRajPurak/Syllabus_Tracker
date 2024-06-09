import mongoose, { Schema } from "mongoose";

const examSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    subject : [{
        type : Schema.Types.ObjectId,
        ref : "Subject",
        required : true
    }],
}
)