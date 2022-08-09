const ticketmodel = require('../api/schema/index');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "paras"


const updateticket = async (req, res) => {
    const token = req.header.token || req.body.token;
    if (token) {
        var decoded = jwt.decode(token);
        if (decoded.roles == "employee") {
            try {
                const data = req.body.id;
                const a = await ticketmodel.findByIdAndUpdate(data, { $set: {status: 'close'} });
                res.send("ticket closed");

            }
            catch (err) {
                res.send(err);
            }
        }
    }

}

module.exports = updateticket;