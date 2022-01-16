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
        Thought.findOneAndUpdate({ _id: params.thoughtId }, body, {new: true, })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch((err) => console.log(err))
    },
}

module.exports = thoughtController