const ticketmodel = require('../api/schema/index');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "paras"


const allticket = async (req,res)=>
{
   try
   { 
    const data =await ticketmodel.find();
    res.send(data);
     
   }
   catch(err)
    {
         res.send(err);
    }

}

module.exports = allticket;