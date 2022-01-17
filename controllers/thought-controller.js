const { User, Thought } = require('../models');

const thoughtController = {
    // createThought
    createThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            console.log(`line 9 thought-controller ${_id}`)
            return User.findOneAndUpdate(
                {_id: params.userId },
                { $push: { thoughts: _id }},
                { new: true }
            );
        })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.json(err));
    },
    getThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch((err) => console.log(err))
    },
    getThought({ params }, res) {
        Thought.find({ _id: params.thoughtId })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch((err) => console.log(err))
    },
    updateThought({ body, params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId }, 
            body, 
            {new: true, }
        )
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch((err) => console.log(err))
    },
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch((err) => console.log(err))
    },
    addReaction({ params, body }, res) {
        console.log(`line 43 thought-controller ${params.thoughtId}`)
        Thought.findOneAndUpdate(
            { _id: params.thoughtId }, 
            { $push: { reactions: body }}, 
            { new: true}
        )
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch(err => res.json(err));
    },
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId }, 
            { $pull: {reactions: { reactionId: params.reactionId }}}, 
            { new: true }
        )
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch((err) => console.log(err))
    }
}

module.exports = thoughtController