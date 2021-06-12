const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String, 
        unique: true, 
        trim: true,
        required: 'Username is required!' 
    },
    email: {
        type: String, 
        unique: true, 
        match: [/.+@.+\..+/],
        required: 'Username is required!'
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
    ],
    
});

const User = model('User', UserSchema);

module.exports = User;