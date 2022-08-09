const ticketmodel = require('../api/schema/index');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "paras"


const deleteticket = async (req, res) => {
    const token = req.header.token || req.body.token;
    if (token) {
        var decoded = jwt.decode(token);
        if (decoded.roles == "admin") {
            try {
                const data = req.body.id;
                const a = await ticketmodel.findByIdAndRemove(data);
                res.send("delete successful");

            }
            catch (err) {
                res.send(err);
            }
        }
    }

}

module.exports = deleteticket;