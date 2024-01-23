const mongoose = require('mongoose');


const ticketModel = mongoose.Schema({
    status :{
        type: String,
        enum : ['pending','opened','closed'],
        default: 'pending'
    },
    userid :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    agentid:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Agent"
    },
    category:{
        type: String,
        enum : ['hardware','software','network'],
    },
    subCategory: {
        type: String,
        enum: ['desktops', 'laptops', 'printers', 'servers', 'networking equipment', 'operating system', 'application software', 'custom software', 'Integration issues', 'email issues', 'internet connection problems', 'website errors', 'other']
    },
    description:{
        type: String
    },
    priority:{
        type: String,
        enum : ['high','medium','low']
    },
    creationDate:{
        type: Date,
        default: Date.now()
    },
    openingDate:{
        type: Date,
        default: Date.now()
    },
    closingDate:{
        type: Date,
        default: Date.now()
    },
    title:{
        type: String
    },
    rate:{
        type: Number,
        min: 0,
        max: 5
    },attachment: [{
        data: Buffer,
        contentType: String
    }],
},
    {   
       timestamps: true,
    }

);

const Ticket = mongoose.model("Ticket" ,ticketModel);
module.exports = Ticket;


