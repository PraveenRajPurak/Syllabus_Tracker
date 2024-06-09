import mongoose, { Schema } from "mongoose";

const subChapterProgressSchema = new Schema({
    subChapter : {
        type : Schema.Types.ObjectId,
        ref : "SubChapter",
        required : true
    },
    sub_chapter_progress : {
        type : Number,
        default : 0,
        required : true
    }
})

export const SubChapterProgress = mongoose.model("SubChapterProgress", subChapterProgressSchema)