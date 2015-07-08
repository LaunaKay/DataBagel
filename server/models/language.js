var mongoose = require('mongoose');

var LanguageSchema = new mongoose.Schema(
{
    postID: {
        type:Number
    },
    CreationDate: {
        type:Date
    },
    Tags: {
        type:String
    },
    ViewCount: {
        type:Number
    },
    Id: {
        type:Number
    },
    Reputation: {
        type:String
    },
    Location: {
        type:String
    }
});

mongoose.model('Language', LanguageSchema);