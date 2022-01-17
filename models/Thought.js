const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//Thought schema for users to make posts
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            max: [280, 'Too many characters']
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

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
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought;