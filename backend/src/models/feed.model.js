const mongoose = require('mongoose');
const FeedSchema = new mongoose.Schema({
    Image: String,
    Caption: String,
})
// creating model for feed 
const Feedmodel = mongoose.model('Feed', FeedSchema);
module.exports = Feedmodel; 
