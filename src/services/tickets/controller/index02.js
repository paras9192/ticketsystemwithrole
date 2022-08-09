const Ticketmodel = require('../api/schema/index');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "paras"


const titleticket = async (req, res) => {


    try {
        if (req.query.title) {
            const data = await Ticketmodel.find({ title: req.query.title });
            console.log(data);
            res.json(data);
        }
        else if (req.query.status) {

            const data = await Ticketmodel.find({ status: req.query.status });
            res.json(data);

        }
        else if (req.query.priority) {

            const data = await Ticketmodel.find({ priority: req.query.priority });
            res.json(data);

        }
        


    }
    catch (err) {
        res.send(err);
    }

}

module.exports = titleticket;