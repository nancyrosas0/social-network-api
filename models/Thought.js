const { Schema, model } = require('mongoose');

const ThoughSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Thought is required!',
        maxLength: 280,
        minLength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now,

    },
    username: {
        type: String, 
        required: 'Username is required!' 
    },
    reactions: [reactionSchema],
    },
{
    toJSON: {
      virtuals: true, 
    },
    id: false
  }
);

UserSchema.virtual
('reactionCount').get(function() {
    return this.reactions.length
})

const User = model('Thought', thoughtSchema);

module.exports = Thought;
