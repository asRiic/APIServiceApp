const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('noteModel', noteSchema);
