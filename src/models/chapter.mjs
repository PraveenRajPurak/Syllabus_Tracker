import mongoose, { Schema } from "mongoose";

const chapterSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    subChapters : [
        {
            type : Schema.Types.ObjectId,
            ref : "SubChapter"
        }
    ]
})

export const Chapter = mongoose.model("Chapter", chapterSchema)