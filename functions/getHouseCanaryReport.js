const axios = require("axios");

module.exports = async function getHouseCanaryReport(address, zipcode, cobranding = false) {
  try {
    const response = await axios.get(`https://api.housecanary.com/v2/property/value_report_static_link`, {
      params: {
        address,
        zipcode,
        cobranding,
      },
      auth: {
        username: process.env.HC_API_KEY,
        password: process.env.HC_API_SECRET,
      },
    });
    console.log(response.data["property/value_report_static_link"]["result"]["link"]);
    return response.data["property/value_report_static_link"]["result"]["link"];
  } catch (error) {
    console.error(error);
  }
};