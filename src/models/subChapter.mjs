import mongoose, { Schema } from "mongoose";

const subChapterSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    content_links : {
        type : String
    }
}) 

export const SubChapter = mongoose.model("SubChapter", subChapterSchema)