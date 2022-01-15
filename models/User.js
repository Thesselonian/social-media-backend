const { Schema, model } = require('mongoose');

//user schema includes username, email, thoughts, friends
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: 'A username must be provided.',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            require: 'An email must be provided.',
            match: [/.+@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

//virtual to count and provide total # friends
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce(
        (total, friends) => total + friends.length +1,
        0
    );
});

const User = model('User', UserSchema)

module.exports = User;