const axios = require("axios");

const ENDPOINT = "property/value";
//const address = "87+Misty+Forest+Dr";
//const zipcode = "36869";


module.exports = async function getHouseCanaryData (address, zipcode) {
    try {
        const response = await axios.get(`https://api.housecanary.com/v2/${ENDPOINT}?address=${address}&zipcode=${zipcode}`, {
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
