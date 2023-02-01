const express = require("express");
const recordRoutes = express.Router();
const getHouseCanaryData = require ("../functions/fetchhousecanary");

recordRoutes.route("/api/boiler").get(async function (req, res) {

    const address = req.query.address;
    const zipcode = req.query.zipcode;
    //const address = "517 N Chugach St";
    //const zipcode = "99645";

    try {
        const r = await getHouseCanaryData(address, zipcode);
        console.log(r)
        res.send({r});
    } catch (e) {
        console.log(e)
        res.send({e})
    }
});



module.exports = recordRoutes;