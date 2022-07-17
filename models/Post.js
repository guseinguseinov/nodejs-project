import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String, 
        require: true,
    },
    content: {
        type: String, 
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})  

export let model = mongoose.model('Post', PostSchema);