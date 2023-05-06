const express = require("express");
const recordRoutes = express.Router();
const getHouseCanaryReport = require("../functions/getHouseCanaryReport");

recordRoutes.route("/api/houseCanaryReport").get(async function (req, res) {
  const address = req.query.address;
  const zipcode = req.query.zipcode;
  const cobranding = req.query.cobranding === "true" ? true : false;

  try {
    const link = await getHouseCanaryReport(address, zipcode, cobranding);
    console.log(link);
    res.send({ link });
  } catch (e) {
    console.log(e);
    res.send({ e });
  }
});

module.exports = recordRoutes;

