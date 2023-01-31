const axios = require("axios");

const ENDPOINT = "property/value";
const IDENTIFIERS = "address=87+Misty+Forest+Dr&zipcode=36869";

module.exports = async function getHouseCanaryData () {
    try {
        const response = await axios.get(`https://api.housecanary.com/v2/${ENDPOINT}?${IDENTIFIERS}`, {
          auth: {
            username: process.env.HC_API_KEY,
            password: process.env.HC_API_SECRET,
          }
        });
        console.log(response.data[0]['property/value']['result'])
        return response.data[0]['property/value']['result'];
      } catch (error) {
        console.error(error);
      }
};
