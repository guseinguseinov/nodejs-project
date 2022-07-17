import mongoose from "mongoose";
import { model } from './models/Post.js';   

await mongoose.connect('mongodb://localhost/nodeblog_test_db');


// UPDATE
// model.findByIdAndUpdate('62d4233d60bec7d586775bdb', {
//     title: "My first Post here",
// }, (err, data) => {
//     console.log(data);
// });


// DELETE
// model.findByIdAndDelete('62d4233d60bec7d586775bdb', (err, data) => {
//     console.log(err, data);
// });

// FIND BY DATA
// model.findById('62d4233d60bec7d586775bdb', (err, data) => {
//     console.log(err, data);
// });

// FIND
// model.find( { } , (err, data) => {
//     console.log(err, data);
// })

// model.create({
//     title: 'My second postum',
//     content: "Hello 2",
// }, (err, post)=> {
//     console.log(err, post);
// });