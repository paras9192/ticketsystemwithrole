const usermodel  = require('../api/schema/index');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "paras"


const signup = async ( req,res)=>
{
    const {username , roles} = req.body;
    try
    {
        const existinguser = await usermodel.findOne({username:username});
    if(existinguser)
    {
        return res.status(400).send('user already exist');
    }
    const result = await usermodel.create({
        username:username,
        roles : roles
    });
    const token = jwt.sign({_id:result._id,roles:result.roles},SECRET_KEY);
    share = token;
    res.status(201).send({user:result , token: token});

    }
    catch(err)
    {
        console.log(err);
        res.send(err);

    }

    
}


module.exports = signup;

