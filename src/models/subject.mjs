import mongoose, { Schema } from "mongoose";

const subjectSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    chapters : [
        {
            type : Schema.Types.ObjectId,
            ref : "Chapter"
        }
    ],
})

export const Subject = mongoose.model("Subject", subjectSchema)