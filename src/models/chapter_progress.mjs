import mongoose, { Schema } from "mongoose";

const chapterProgressSchema = new Schema({
    chapter : {
        type : Schema.Types.ObjectId,
        ref : "Chapter",
        required : true
    },
    chapter_progress : {
        type : Number,
        default : 0,
        required : true
    },
    subChaptersProgress : [
        {
            type : Schema.Types.ObjectId,
            ref : "SubChapterProgress"
        }
    ]
})

export const ChapterProgress = mongoose.model("ChapterProgress", chapterProgressSchema)