const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ticketSchema = new Schema({
    title: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 200},
    status: {
        type: [{
            type: String,
            enum: ['open', 'close']
        }],
        default: ['open']
    },
    priority: {
        type: [{
            type: String,
            enum: ['low', 'medium','high']
        }],
        default: ['low']
    },
    assignedTo: {type: String, required: true, max: 25},
    
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
module.exports = mongoose.model('tickets', ticketSchema);