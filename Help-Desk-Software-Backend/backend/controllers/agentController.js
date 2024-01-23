const ticket= require('../models/ticketModel');
const {logger} = require('../middleware/logger');
const knowledgeBaseModel = require('../models/knowledgeBaseModel');
const agent = require('../models/agentModel');
const sendEmail = require('../utils/emailService');
const TicketQModel = require('../models/TicketQ');
const chatRequestmodel = require('../models/chatRequest');
const User = require('../models/userModel');
const { Console } = require('winston/lib/winston/transports');
exports.getAllTickets = async (req, res, next) => {
  console.log('getAllTicket function was called');
  try {
    const tickets = await ticket.find().sort({ date: -1 }); 
    console.log('tickets:', tickets);
    res.status(200).json(tickets);

  } catch (err) {
    console.error('Error:', err);
    logger.error(err.message);
    res.status(500).json({ message: err.message });
  }
};
exports.createQandA = async (req, res, next) => {
  console.log('createQandA function was called');
  try {
    const { question, answer } = req.body;
    const newQandA = new knowledgeBaseModel({
      question,
      answer,
    });
    const savedQandA = await newQandA.save();
    res.status(200).json(savedQandA);
  } catch (err) {
    console.error('Error:', err);
    logger.error(err.message);
    res.status(500).json({ message: err.message });
  }
}

exports.getAssignedTickets = async (req, res, next) => {
  console.log('getAssignedTickets function was called');
  try {
    console.log("req.user",req.user);
    const agentin =  await agent.find({userId:req.user.id})
    console.log("agentin",agentin);
    const tickets = await ticket.find({
      agentid: agentin[0].userId, 
      //status: 'pending'
    });
    console.log('tickets:', tickets);
    res.status(200).json(tickets);
  } catch (err) {
    console.error('Error:', err);
    logger.error(err.message);
    res.status(500).json({ message: err.message });
  }
}

exports.updateTicket = async (req, res, next) => { 
  try{
  console.log('updateTicket function was called');

  const {id} = req.params;

  const Ticket = await ticket.findById(id);

  const user = await User.findById(Ticket.userid);
  console.log("ticket",Ticket);
  console.log("user",user);

  if(Ticket.status === 'pending'){

    Ticket.status = 'opened';
    await Ticket.save();

    if(Ticket.subCategory === 'other'){

      const chatreq =  await chatRequestmodel.findOne({ticketId:Ticket._id});

      chatreq.status = 'opened';

      await chatreq.save();

      sendEmail(user.email, 'Ticket Opened', `<h1>Dear ${user.name} </h1><p>Your ticket has been opened please go to your chatting page</p>`);
    }else{
    sendEmail(user.email, 'Ticket Opened', `<h1>Dear ${user.name} </h1><p>Your ticket has been opened</p>`);
    }
    console.log("ticket ending the method",Ticket);
    return res.status(200).json(Ticket.status);
  }
 
  } catch (err) {
    console.error('Error:', err);
    logger.error(err.message);
    res.status(500).json({ message: err.message });
  }
}

exports.sendSloution = async (req, res, next) => {
  console.log('sendSloution function was called');
  try {
    console.log("req.params",req.params);
    const id  = req.params.id;
    console.log("id",id);
    const { solution } = req.body;
    const foundTicket = await ticket.findById(id); 
    const user = await User.findById(foundTicket.userid); 
    sendEmail(user.email, 'Ticket Solution', `<h1>Dear ${user.name} </h1><p>${solution}</p>`);
    if(foundTicket.status === 'opened'){ 
      foundTicket.status = 'closed';
      await foundTicket.save();
      if(foundTicket.subCategory === 'other'){ 
        const chatreq =  await chatRequestmodel.findOne({ticketId:foundTicket._id}); 
        await chatreq.save();
      }
      sendEmail(foundTicket.email, 'Ticket Closed', `<h1>Dear ${user.name} </h1><p>Your ticket has been closed</p>`); 

      console.log("ticket ending the method",foundTicket); 
      return res.status(200).json(foundTicket.status);
    }
    res.status(200).json({ message: 'email sent' });
  } catch (err) {
    console.error('Error:', err);
    logger.error(err.message);
    res.status(500).json({ message: err.message });
  }
}