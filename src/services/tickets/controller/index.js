const ticketmodel = require('../api/schema/index');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "paras"



const auth = async (req, res) => {
    
   const {title,description,status,priority,assignedTo} = req.body;
    const token = req.header.token || req.body.token;
    if (token) {
        var decoded = jwt.decode(token);
        if (decoded.roles == "admin") {
           

            try {
                const result = await ticketmodel.create({
                    title: title,
                    description: description,
                    status: status,
                    priority: priority,
                    assignedTo: assignedTo

                });
                res.status(201).send({user:result , token: token});
            }
            catch (err) {
                console.log(err);
                res.send(err);
            }
        }

    }
    else {
        res.status(401).send("unauthorized");
    }
}


module.exports = auth;
