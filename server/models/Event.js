// server/models/Event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{ type:String,
                 required:false
                },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
