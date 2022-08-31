const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const questionSchema = new Schema({
    name: String,
    question: String,
    a: {
        answer: String,
        update_score: {
            type: Schema.Types.ObjectId,
            ref: "Score"
        },
        next: {
            type: Schema.Types.ObjectId,
            ref: "Question",
        }
    },
    b: {
        answer: String,
        update_score: {
            type: Schema.Types.ObjectId,
            ref: "Score"
        },
        next: {
            type: Schema.Types.ObjectId,
            ref: "Question"
        }
    },
    c: {
        answer: String,
        update_score: {
            type: Schema.Types.ObjectId,
            ref: "Score"
        },
        next: {
            type: Schema.Types.ObjectId,
            ref: "Question"
        }
    },
    d: {
        answer: String,
        update_score: {
            type: Schema.Types.ObjectId,
            ref: "Score"
        },
        next: {
            type: Schema.Types.ObjectId,
            ref: "Question"
        }
    }
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question