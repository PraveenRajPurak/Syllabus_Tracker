import mongoose, { Schema } from "mongoose";

const examProgressSchema = new Schema({
    exam : {
        type : Schema.Types.ObjectId,
        ref : "Exam",
        required : true
    },
    subjectProgress: [{
        type: Schema.Types.ObjectId,
        ref: "SubjectProgress",
    }],
    exam_progress : {
        type : Number,
        default : 0
    },
})

export const ExamProgress = mongoose.model("ExamProgress", examProgressSchema)