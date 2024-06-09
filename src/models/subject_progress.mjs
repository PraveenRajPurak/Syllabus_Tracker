import mongoose, { Schema } from "mongoose";

const subjectProgressSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    chaptersProgress : [
        {
            type : Schema.Types.ObjectId,
            ref : "ChapterProgress"
        }
    ],
    subjectProgress :{
        type : Number,
        default : 0
    }
})

export const SubjectProgress = mongoose.model("SubjectProgress", subjectProgressSchema)