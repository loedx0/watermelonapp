const express = require("express");
const recordRoutes = express.Router();
const getHouseCanaryData = require ("../functions/fetchhousecanary");

recordRoutes.route("/api/boiler").get(async function (req, res) {

    try {
        const r = await getHouseCanaryData();
        console.log(r)
        res.send({r});
    } catch (e) {
        console.log(e)
        res.send({e})
    }
});



module.exports = recordRoutes;