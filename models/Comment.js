const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    content: {
        type: String,
        required: [true, 'provide comment with your review']
    },
    StreamDream: {
        type: mongoose.Types.ObjectId,
        ref: 'StreamDream'
    }
}, { timestamps: true })

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment