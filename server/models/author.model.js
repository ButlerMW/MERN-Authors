const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { type: String,
        required: [
            true,
            "name is required"
        ],
        minlength: [3,
        "Must have a min length of 3"]
    }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);