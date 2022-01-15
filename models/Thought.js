const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: 'You must provide text for the thought.',
            min: [1, 'Not enough characters'],
            max: [280, 'Too many characters']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            require: true,
        },
        reactions: []
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought;