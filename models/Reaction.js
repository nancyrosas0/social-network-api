
const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String, 
        required: 'Username is required!', 
        maxLength: 280
    },
    username: {
        type: String, 
        required: 'Username is required!' 
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // add getter for format here
    },
 });



const User = model('Reaction', reactionSchema);

module.exports = Reaction;
