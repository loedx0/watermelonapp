const express = require('express');
const app = express();
require("dotenv").config({path: "./config.env"});
const cors = require('cors');
app.use(cors({
  origin: 'https://home-housecanary.replit.app'
}));

app.use(require('./api/fetch_house'))
app.use(require('./api/fetch_house_canary_report')); // Updated to include the new route

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
