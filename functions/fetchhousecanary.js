const axios = require("axios");

const ENDPOINT = "property/value";
const IDENTIFIERS = "address=87+Misty+Forest+Dr&zipcode=36869";

module.exports = async function getHouseCanaryData () {
    try {
        const response = await axios.get(`https://api.housecanary.com/v2/${ENDPOINT}?${IDENTIFIERS}`, {
          auth: {
            username: 'test_YYI3X9CY6NV23H6DU70O',
            password: 'ryabhMVxkdq8uFVsYpJ6oMUHzBc5zf0f'
          }
        });
        console.log(response.data[0]['property/value']['result'])
        return response.data[0]['property/value']['result'];
      } catch (error) {
        console.error(error);
      }
};
