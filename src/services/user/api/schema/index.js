const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {type: String, required: true, max: 25},
    roles: {
        type: [{
            type: String,
            enum: ['admin', 'employee']
        }],
        default: ['employee']
    },
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
},{
    timestamps: true
});

// Export the model
module.exports = mongoose.model('User', UserSchema);